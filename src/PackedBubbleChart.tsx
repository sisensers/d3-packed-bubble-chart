import { useState, useEffect } from 'react';
import { DateRangeFilterTile, useExecuteQuery } from '@sisense/sdk-ui';
import * as DM from './sample-ecommerce';
import { Filter, filterFactory, measureFactory } from '@sisense/sdk-data';
import * as d3 from 'd3';
import './MyPackedBubbleChart.css'; // Separate CSS file for animation styling

function MyPackedBubbleChart() {
    const [dateRangeFilter, setDateRangeFilter] = useState<Filter>(
        filterFactory.dateRange(DM.Commerce.Date.Months)
    );
    const [packedData, setPackedData] = useState<any[]>([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    // Query data
    const { data, isLoading, isError } = useExecuteQuery({
        dataSource: DM.DataSource,
        dimensions: [DM.Commerce.AgeRange],
        measures: [measureFactory.sum(DM.Commerce.Revenue)],
        filters: [dateRangeFilter]
    });

    useEffect(() => {
        if (!isLoading && !isError && data) {
            const root = d3.hierarchy<any>({ children: data.rows.map(row => ({ name: row[0].data, value: row[1].data })) })
                .sum(d => d.value as number);

            const packLayout = d3.pack<any>()
                .size([800, 800])
                .padding(3);

            const nodes = packLayout(root).descendants();
            setPackedData(nodes);
            setIsDataLoaded(true); // Indicate data is fully loaded
        }
    }, [data, isLoading, isError, dateRangeFilter]);

    const colorScale = d3.scaleSequential(d3.interpolateViridis)
        .domain([d3.min(packedData, d => d.value) || 0, d3.max(packedData, d => d.value) || 1]);

    return (
        <>
            <div style={{ paddingBottom: "20px" }}>
                <DateRangeFilterTile
                    title="Date Range"
                    dataSource={DM.DataSource}
                    attribute={DM.Commerce.Date.Months}
                    filter={dateRangeFilter}
                    onChange={(newFilter: Partial<Filter>) => {
                        setDateRangeFilter(newFilter as Filter);
                        setIsDataLoaded(false); // Reset data loaded state when filter changes
                    }} 
                />
            </div>
            <svg width={800} height={800}>
                {packedData.map((node, i) => (
                    !node.children && (
                        <g key={i} transform={`translate(${node.x},${node.y})`}>
                            <circle
                                className={isLoading ? 'loading-circle' : ''}
                                cx={0}
                                cy={0}
                                r={isDataLoaded ? node.r : node.r * 0.9} // Shrink slightly if data is loading
                                fill={colorScale(node.value)}
                                opacity={0.7}
                                style={{
                                    transition: 'r 0.8s ease-in-out, transform 0.8s ease-in-out',
                                    transformOrigin: 'center',
                                }}
                            />
                            <text
                                textAnchor="middle"
                                dy="0.3em"
                                fill="white"
                                fontSize={12}
                                style={{
                                    transition: 'transform 0.8s ease-in-out',
                                    transformOrigin: 'center',
                                }}
                            >
                                {node.data.name}
                            </text>
                        </g>
                    )
                ))}
            </svg>
        </>
    );
}

export default MyPackedBubbleChart;
