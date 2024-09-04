# D3 Packed Bubble Chart with Sisense Compose SDK


![packedbubble](https://github.com/user-attachments/assets/c398e663-a4d7-445c-b492-c8aecae57163)

This project is a React component that displays a packed bubble chart using D3.js and the Sisense Compose SDK to manage queries. The chart supports filtering and real-time animations, offering smooth visual transitions between data updates.

## Table of Contents

- [Dependencies](#dependencies)
- [Setup](#setup)
- [Authentication](#authentication)
- [Usage](#usage)
- [Sisense Trial](#sisense-trial)
- [How It Works](#how-it-works)
- [License](#license)

## Dependencies

To run this project, you need to install the following dependencies:

### NPM Packages:
- **React**: `npm install react react-dom`
- **D3.js**: `npm install d3`
- **Sisense Compose SDK**: `npm install @sisense/sdk-ui @sisense/sdk-data`
- **TypeScript** (optional, but recommended): `npm install typescript @types/react @types/react-dom`
- **Other Development Tools**: For testing and building, you may want to install development dependencies such as `webpack`, `babel`, etc., depending on your environment.

### Development Environment:
- Node.js version 14.x or later
- A modern web browser

## Setup

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. **Add a `.env` file** to configure your environment variables (Sisense instance URL and API token). This file should contain:
   ```bash
   REACT_APP_SISENSE_INSTANCE_URL=https://your-sisense-instance-url.com
   REACT_APP_SISENSE_API_TOKEN=your-api-token
   ```
   These environment variables will be used to authenticate requests to your Sisense instance. Make sure the `.env` file is placed in the root directory and is added to `.gitignore` to prevent accidental commits of sensitive information.

4. Start the development server:
   ```bash
   npm start
   ```

## Authentication

This project uses the **Sisense Compose SDK** to manage queries and retrieve data. You will need a Sisense instance URL and an API Token to authenticate requests.

- **Sisense Instance URL**: The URL where your Sisense instance is hosted.
- **API Token**: A token generated from your Sisense platform that allows access to the API.

If you're not a Sisense customer, you can still try this out by signing up for a **free trial** of the Sisense Compose SDK.

## Sisense Trial

To get started with a free trial of the Sisense Compose SDK, sign up here:

[Sign up for a free trial](https://www.sisense.com/platform/compose-sdk-free-trial/)

Once signed up, you'll receive access to your Sisense instance and API credentials to use with this project.

## How It Works

This project leverages the **Sisense Compose SDK** to query and fetch data, and D3.js to visualize that data in the form of a packed bubble chart.

- **Data Querying with Sisense Compose SDK**: The `useExecuteQuery` hook from the Sisense SDK is used to execute a query against the data source. The query retrieves both dimensions (e.g., `DM.Commerce.AgeRange`) and measures (e.g., `DM.Commerce.Cost` and `DM.Commerce.Revenue`). Here’s an example of how the query is set up:

   ```javascript
   const { data, isLoading, isError } = useExecuteQuery({
     dataSource: DM.DataSource,
     dimensions: [DM.Commerce.AgeRange],
     measures: [
       measureFactory.sum(DM.Commerce.Cost, 'Total Cost'),
       measureFactory.sum(DM.Commerce.Revenue, 'Total Revenue')
     ]
   });
   ```

   The `data` variable contains the rows returned from the query, which are then mapped and passed into the D3.js visualization.

- **Mapping Data to D3.js Visualization**: The data fetched by the Sisense SDK is processed and formatted into a structure compatible with D3.js. Each row of data contains an `ageRange`, `totalCost`, and `totalRevenue`, which are visualized as bubbles in the chart. The size of each bubble is determined by the total cost, while the y-axis position is based on total revenue:

   ```javascript
   const bubbleData = data.rows.map(row => ({
     ageRange: row[0].data,
     totalCost: row[1].data ?? 0,
     totalRevenue: row[2].data ?? 0
   }));
   ```

   D3.js is then used to create SVG elements (circles) for each data point, where the radius of the circle is scaled based on the total cost and positioned on the chart based on the total revenue:

   ```javascript
   svg.selectAll('circle')
     .data(bubbleData)
     .enter()
     .append('circle')
     .attr('cx', d => xScale(d.ageRange))
     .attr('cy', d => yScale(d.totalRevenue))
     .attr('r', d => radiusScale(d.totalCost))
     .attr('fill', 'steelblue');
   ```

   This allows the data to be visualized as a packed bubble chart, where each bubble represents the total cost and revenue for a given age range.

## License

This project is open source and available under the [MIT License](LICENSE).
