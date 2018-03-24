const bands =
[
	'The Plot in You',
	'The Devil Wears Prada',
	'Pierce the Veil',
	'Norma Jean',
	'The Bled',
	'Say Anything',
	'The Midway State',
	'We Came as Romans',
	'Counterparts',
	'Oh, Sleeper',
	'A Skylit Drive',
	'Anywhere But Here',
	'An Old Dog'
];

const strip = function(bandName) {
	return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortBands = bands.sort((band1, band2) => strip(band1) > strip(band2) ? 1 : -1);

document.querySelector('#bands').innerHTML = sortBands.map((bandName) => {
	return `
		<li>${bandName}</li>
	`;
}).join('');
