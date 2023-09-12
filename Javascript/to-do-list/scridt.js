const input_box = document.querySelector('#input_box');
const list_container = document.querySelector('#list_container');

const addTask = () => {
    if (input_box.value === '') {
        alert('your input box is empty')
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input_box.value;
        list_container.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    input_box.value = '';
}

list_container.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked')
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    }
})