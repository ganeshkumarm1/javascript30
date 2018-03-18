const hoursHand = document.querySelector('.hour-hand');
const minutesHand = document.querySelector('.min-hand');
const secondsHand = document.querySelector('.second-hand');

function setHour(now) {
	const hours = now.getHours();
	const hoursDegree = ((hours / 12) * 360) + 90;
	hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}

function setMinute(now) {
	const minutes = now.getMinutes();
	const minutesDegree = ((minutes / 60) * 360) + 90;
	minutesHand.style.transform = `rotate(${minutesDegree}deg)`; 
}

function setSecond(now) {
	const seconds = now.getSeconds();
	const secondsDegree = ((seconds / 60) * 360) + 90;
	secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
}

function setDate() {
	const now = new Date();
	setSecond(now);
	setMinute(now);
	setHour(now);
}

setInterval(setDate, 1000);