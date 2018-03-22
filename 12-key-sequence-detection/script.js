const secretCode = 'ganesh';
const pressed = []

const handleKeyUp = function(e) {
	pressed.push(e.key);
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

	if(pressed.join('') === secretCode) {
		cornify_add();
	}
}

window.addEventListener('keyup', handleKeyUp);
