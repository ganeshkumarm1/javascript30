const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

const logText = function(e) {
	console.log(this.classList.value);
	e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, { capture: false }, { once: true }));
//divs.forEach(div => div.addEventListener('click', logText, {capture: true}));
button.addEventListener('click', () => console.log('Clicked !!!'), { once: true });