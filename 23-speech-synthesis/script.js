const msg = new SpeechSynthesisUtterance();
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

let voices = [];

msg.text = document.querySelector('[name="text"]').value;

const populateVoices = function() {
	voices = this.getVoices();
	voices.sort((firstVoice, secondVoice) => (firstVoice.name > secondVoice.name) ? 1 : -1);

	voicesDropdown.innerHTML = voices
		.filter(voice => voice.lang.includes('en'))
		.map(voice => {
			return `
				<option value='${voice.name}'>${voice.name} (${voice.lang})</option>
			`;
		}).join('');
}

const toggle = function(startOver = true) {
	speechSynthesis	.cancel();
	if(startOver) {
		speechSynthesis.speak(msg);
	}
}

const setVoice = function() {
	msg.voice = voices.find(voice => voice.name === this.value);
	toggle();
}

const setOption = function() {
	msg[this.name] = this.value;
	toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));