Here is a README for your project that describes the dependencies, usage, and authentication requirements:

---

# My Packed Bubble Chart with Sisense Compose SDK

This project is a React component that displays a packed bubble chart using D3.js and the Sisense Compose SDK to manage queries. The chart supports filtering and real-time animations, offering smooth visual transitions between data updates.

## Table of Contents

- [Dependencies](#dependencies)
- [Setup](#setup)
- [Authentication](#authentication)
- [Usage](#usage)
- [Sisense Trial](#sisense-trial)
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

3. Add a `.env` file to configure your environment variables (Sisense instance URL and API token). This file should contain:
   ```bash
   REACT_APP_SISENSE_INSTANCE_URL=https://your-sisense-instance-url.com
   REACT_APP_SISENSE_API_TOKEN=your-api-token
   ```

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

## Usage

This component allows users to visualize data in a packed bubble chart. It includes:
- A date range filter to dynamically query and display data.
- Real-time bubble resizing and positioning based on data changes.
- Animations during data loading to enhance user experience.

To customize the component:
- Modify the dimensions and measures in the `useExecuteQuery` hook.
- Adjust the D3 layout and appearance by changing the layout or color scales.

## License

This project is open source and available under the [MIT License](LICENSE).

---

This README provides all the necessary information for setting up and running the project, along with instructions for non-Sisense customers to sign up for a free trial. Let me know if you'd like any additional details!