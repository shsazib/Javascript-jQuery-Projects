const Buttons = document.querySelectorAll('.btn');

Buttons.forEach((button) => {
    button.addEventListener('click', (event ) => {
        Buttons.forEach((btn) => {
            btn.classList.remove('active')
            event.target.classList.add('active')
        })
    })
})