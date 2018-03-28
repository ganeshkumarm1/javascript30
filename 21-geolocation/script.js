const arrow = document.querySelector('.arrow');
const speed= document.querySelector('.speed-value');

alert(JSON.stringify(navigator.geolocation));
navigator.geolocation.watchPosition((data) => {
	//alert(JSON.stringify(data));
	speed.textContent = data.coors.speed;
	arrow.style.transform = 	`rotate(${data.coors.heading}deg)`;
}, (err) => {
	console.error(err);
	alert('Hey! Please enable GeoLocation');
});