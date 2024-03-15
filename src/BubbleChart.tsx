import { useExecuteQuery } from '@sisense/sdk-ui';
import * as DM from './sample-ecommerce';
import { Measure, measureFactory } from '@sisense/sdk-data';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function BubbleChart() {
  // Query
  const { data, isLoading, isError } = useExecuteQuery({
    dataSource: DM.DataSource,
    dimensions: [DM.Commerce.AgeRange],
    measures: [
      measureFactory.sum(DM.Commerce.Cost, 'Total Cost'),
      measureFactory.sum(DM.Commerce.Revenue, 'Total Revenue'),
    ],
  });

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!data) return;

    const svg = d3.select(svgRef.current);

    svg.selectAll('*').remove();

    const bubbleData = data.rows.map(row => ({
      ageRange: row[0].data,
      totalCost: row[1].data ?? 0, 
      totalRevenue: row[2].data ?? 0, 
    }));

    // Set up bubble chart dimensions
    const width = 900;
    const height = 500;

    // Define scales
    const xScale = d3.scaleBand()
      .domain(bubbleData.map(d => d.ageRange))
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(bubbleData, d => Math.max(d.totalCost, d.totalRevenue)) ?? 0]) 
      .range([height, 0]);

    const radiusScale = d3.scaleSqrt()
      .domain([0, d3.max(bubbleData, d => Math.max(d.totalCost, d.totalRevenue)) ?? 0]) 
      .range([0, 30]); // Adjust the range as needed

svg.selectAll('circle')
  .data(bubbleData)
  .enter()
  .append('circle')
  .attr('cx', d => {
    const x = xScale(d.ageRange);
    return x !== undefined ? x + xScale.bandwidth() / 2 : 0; 
  })
  .attr('cy', d => yScale(d.totalRevenue))
  .attr('r', d => radiusScale(d.totalCost))
  .attr('fill', 'steelblue')
  .attr('opacity', 0.7);


    // Draw axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);

    svg.append('g')
      .call(yAxis);

    // Add titles
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', height + 40)
      .attr('text-anchor', 'middle')
      .text('Age Range');

    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', -60)
      .attr('text-anchor', 'middle')
      .text('Cost and Revenue ($)');

    svg.append('text')
      .attr('x', width / 2)
      .attr('y', -20)
      .attr('text-anchor', 'middle')
      .style('font-size', '18px')
      .text('Total Cost and Revenue by Age Ranges');

  }, [data]);

  return (
    <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 900 500"></svg>
  );
}

export default BubbleChart;
