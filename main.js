const message = document.querySelector('#message'),
saveBtn = document.querySelector('#save'),
resetBtn = document.querySelector('#reset'),
italicBtn = document.querySelector('#italic'),
boldBtn = document.querySelector('#bold');

const ITALIC = 'italic';
const BOLD = 'bold';

message.innerHTML = localStorage.getItem('message');

message.addEventListener('input', save);
saveBtn.addEventListener('click', save);
resetBtn.addEventListener('click', reset);
italicBtn.addEventListener('click', setFormat.bind(null, ITALIC));
boldBtn.addEventListener('click', setFormat.bind(null, BOLD));

function save() {
    localStorage.setItem('message', message.innerHTML);
}

function reset() {
    localStorage.removeItem('message');
	message.innerHTML = null;
}

function setFormat(format) {
	if (format === ITALIC) {
		// message.innerHTML = `<span class="italic">${message.innerHTML}</span>`	
	}
	if (format === BOLD) {
		// message.innerHTML = <span class="bold">${message.innerHTML}</span>
	}
	if (message.selectionStart != message.selectionEnd) {
		const selectedText = message.innerHTML.substring(message.selectionStart, message.selectionEnd);
		document.execCommand('bold');
		alert(selectedText);
	}
    localStorage.setItem('message', message.innerHTML);
}
