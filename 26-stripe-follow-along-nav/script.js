const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

const handleEnter = function() {
	this.classList.add('trigger-enter');
	setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
	background.classList.add('open');

	const dropdown = this.querySelector('.dropdown');
	const dropdownCoors = dropdown.getBoundingClientRect();
	const navCoors = nav.getBoundingClientRect();

	const coors = {
		width: dropdownCoors.width,
		height: dropdownCoors.height,
		top: dropdownCoors.top - navCoors.top,
		left: dropdownCoors.left - navCoors.left
	}

	background.style.width = `${coors.width}px`;
	background.style.height = `${coors.height}px`;
	background.style.transform = `translate(${coors.left}px, ${coors.top}px)`;
}

const handleLeave = function() {
	this.classList.remove('trigger-enter', 'trigger-enter-active');
	background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));