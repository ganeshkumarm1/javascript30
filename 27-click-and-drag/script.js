const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

const handleMouseDown = function(e) {
	isDown = true;
	slider.classList.add('active');
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
}

const handleMouseUp = function() {
	isDown = false;
	slider.classList.remove('active');
}

const handleMouseLeave = function() {
	isDown = false;
	slider.classList.remove('active');
}

const handleMouseMove = function(e) {
	if(!isDown) return;
	e.preventDefault();
	const x = e.pageX -slider.offsetLeft;
	const walk = x - startX;
	slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener('mousedown', handleMouseDown);
slider.addEventListener('mouseup', handleMouseUp);
slider.addEventListener('mouseleave', handleMouseLeave);
slider.addEventListener('mousemove', handleMouseMove);