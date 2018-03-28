let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

const timer = function(seconds) {
	clearInterval(countdown);

	const now = Date.now();
	const then = now + (seconds * 1000);

	displayTimeLeft(seconds);
	displayEndTime(then);
	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);

		if(secondsLeft < 0) {
			clearInterval(countdown);
			return;
		}

		displayTimeLeft(secondsLeft);
	}, 1000);
}

const displayTimeLeft = function(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
	formattedSeconds = remainderSeconds < 10 ? `0${remainderSeconds}` : remainderSeconds;

	const display = `${formattedMinutes}:${formattedSeconds}`;
	timerDisplay.textContent = document.title = display;
}

const displayEndTime = function(timestamp) {
	const end = new Date(timestamp);
	const hours = end.getHours();
	const minutes = end.getMinutes();

	const formattedHours = hours < 10 ? `0${hours}` : hours;
	const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
	endTimeDisplay.textContent = `Be Back At ${formattedHours > 12 ? formattedHours - 12 : formattedHours}:${formattedMinutes}`;
}


const startTimer = function() {
	const seconds = parseInt(this.dataset.time);
	timer(seconds);
}

const handleSubmit = function(e) {
	e.preventDefault();
	const seconds = this.minutes.value * 60;
	this.reset();
	timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', handleSubmit)