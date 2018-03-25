const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

const highlightLink = function() {
	const linkCoors = this.getBoundingClientRect();
	const coors = {
		width: linkCoors.width,
		height: linkCoors.height,
		top: linkCoors.top + window.scrollY,
		left: linkCoors.left + window.scrollX
	}

	highlight.style.width = `${coors.width}px`;
	highlight.style.height = `${coors.height}px`;
	highlight.style.transform = `translate(${coors.left}px, ${coors.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));

triggers[0].dispatchEvent(new Event('mouseenter'));