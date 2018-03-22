const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');

const togglePlay = function() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

const updateButton = function() {
	toggle.textContent = this.paused ? '►' : '❚ ❚';
}

const handleProgress = function() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

const skip = function() {
	video.currentTime += parseFloat(this.dataset.skip);
}

const handleRangeUpdate = function() {
	video[this.name] = this.value;
}

const scrub = function(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mouseup', () => mousedown = false);
