mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
	center: restaurant.geometry.coordinates, // starting position [lng, lat]
	zoom: 12 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

const marker = new mapboxgl.Marker()
	.setLngLat(restaurant.geometry.coordinates)
	.setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h5>${restaurant.title}</h5><p>${restaurant.location}</p>`))
	.addTo(map);
