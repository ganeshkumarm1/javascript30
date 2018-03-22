const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

const handleCheck = function(e) {
	let inBetween = false;
	if(e.shiftKey && this.checked) {
		checkboxes.forEach(checkbox => {
			if(checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}
			if(inBetween) {
				checkbox.checked = true;
			}
		});
	}
lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
