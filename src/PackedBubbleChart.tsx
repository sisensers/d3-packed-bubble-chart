import { useState, useEffect } from 'react';
import { DateRangeFilterTile, useExecuteQuery } from '@sisense/sdk-ui';
import * as DM from './safetower-dev';
import { Filter, filterFactory, measureFactory } from '@sisense/sdk-data';
import * as d3 from 'd3';

function MyPackedBubbleChart() {
    const [dateRangeFilter, setDateRangeFilter] = useState<Filter>(
        filterFactory.dateRange(DM.event.event_date.Months)
    );
    const [packedData, setPackedData] = useState<any[]>([]); 

    // Query data
    const { data, isLoading, isError } = useExecuteQuery({
        dataSource: DM.DataSource,
        dimensions: [DM.indicator.parent_indicator],
        measures: [measureFactory.countDistinct(DM.event.event_id, 'Total Revenue')],
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
        }
    }, [data, isLoading, isError, dateRangeFilter]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    const colorScale = d3.scaleSequential(d3.interpolateViridis)
        .domain([d3.min(packedData, d => d.value) || 0, d3.max(packedData, d => d.value) || 1]);

    return (
        <>
            <div style={{ paddingBottom: "20px" }}>
                <DateRangeFilterTile
                    title="Date Range"
                    dataSource={DM.DataSource}
                    attribute={DM.event.event_date.Months}
                    filter={dateRangeFilter}
                    onChange={(newFilter: Partial<Filter>) => setDateRangeFilter(newFilter as Filter)} />
            </div>
            <svg width={800} height={800}>
                {packedData.map((node, i) => (
                    !node.children && (
                        <g key={i} transform={`translate(${node.x},${node.y})`} style={{ transition: 'transform 0.5s' }}>
                            <circle
                                cx={0}
                                cy={0}
                                r={node.r}
                                fill={colorScale(node.value)}
                                opacity={0.7}
                            />
                            <text
                                textAnchor="middle"
                                dy="0.3em"
                                fill="white"
                                fontSize={12}
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
