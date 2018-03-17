const keys = document.querySelectorAll(".key");

var removeTransition = function(e) {
	if(e.propertyName !== "transform") return;

	this.classList.remove("playing");
}

var playSound = function(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	if(!audio) return;

	audio.currentTime = 0;
	audio.play();

	key.classList.add('playing');
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);