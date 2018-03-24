const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const videosList = document.querySelector('.videos');

const seconds = timeNodes.reduce((total, timeNode) => {
	const time = timeNode.dataset.time;
	const [mins, secs] = time.split(':').map(parseFloat);
	return total + ((mins * 60) + secs);
}, 0);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft % 60);
secondsLeft = secondsLeft % 60;

videosList.prepend(`Total: ${hours}hr ${mins}min ${secondsLeft}sec`);
