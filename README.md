# Kepler Map App

This is a React application that integrates Kepler.gl for interactive geospatial visualization.

## Prerequisites
Ensure you have the following installed:
- Node.js (>= 14.x)
- npm or yarn

## Installation
Clone the repository and install dependencies:

```sh
# Install dependencies
npm install
```

## Usage
Run the development server:

```sh
npm start
```

The app will be available at `http://localhost:3000/`.

## Dependencies
- React
- Redux Toolkit
- Kepler.gl
- Mapbox GL JS

## Configuration
This app requires a Mapbox API key for full functionality. Update the `mapboxApiAccessToken` prop in `App.js` with your token:

```js
<KeplerGl
  id="map"
  width={window.innerWidth}
  height={window.innerHeight}
  mapboxApiAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
/>
```
