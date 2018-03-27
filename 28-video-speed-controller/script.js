const speed = document.querySelector('.speed');
const speedBar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

const handleMouseMove = function(e) {
	const y = e.pageY - this.offsetTop;
	const percent = y / this.offsetHeight;
	speedBar.style.height = `${Math.round(percent * 100)}%`;

	const min = 0.4;
	const max = 4;
	const playbackRate = percent * (max - min) + min;
	speedBar.textContent = `${playbackRate.toFixed(2)}x`;

	video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMouseMove);