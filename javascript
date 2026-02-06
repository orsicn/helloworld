


 fetch('data/airports.geojson')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Check if GeoJSON loads correctly
  })
  .catch(error => console.error('Error:', error));


  // 1. Create the map
var map = L.map('map').setView([44.5, -123.3], 6);

// 2. Add a basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 3. Fetch the GeoJSON
fetch('data/airports.geojson')
  .then(response => response.json())
  .then(data => {
    console.log('GeoJSON loaded:', data);

    // 4. Add GeoJSON to the map
    L.geoJSON(data).addTo(map);
  })
  .catch(error => console.error('Error loading GeoJSON:', error));
