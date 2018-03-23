const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

const updateLocalStorage= function(items) {
	localStorage.setItem('items', JSON.stringify(items));
}

const addItem = function(e) {
	e.preventDefault();

	items.push({
		text: this.querySelector('[name=item]').value,
		done: false
	});

	this.reset();
	updateLocalStorage(items);
	populateItems(items, itemsList);
}

const populateItems = function(items, itemsList) {
		itemsList.innerHTML = items.map((item, i) => {
			return `
					<li>
						<input type='checkbox' ${item.done ? 'checked': ''} id='item-${i}' data-index='${i}' />
						<label for='item-${i}'>${item.text}</label>
					</li>
			`;
		}).join('');
}

const toggleDone = function(e) {
	if(!e.target.matches('input')) return;
	const index = e.target.dataset.index;
	items[index].done = !items[index].done
	updateLocalStorage(items);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateItems(items, itemsList);
