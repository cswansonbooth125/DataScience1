mapboxgl.accessToken =
  "<pk.eyJ1IjoiYnNpbHZlcjMiLCJhIjoiY2xwMDNlbGxsMDZhbDJqbWRnaGVjOWc0eiJ9._QgUCHfgP04mlViq7_GByA>";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-122.33, 47.6], // starting position [lng, lat]
  zoom: 9, // starting zoom
});