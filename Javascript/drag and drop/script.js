const Container = document.querySelector(".container");
Button = Container.querySelector("button")
Input = Container.querySelector("input")
headding = Container.querySelector("h3")
let MyFile;

Button.onclick = () => {
    Input.click()
}

Container.addEventListener('dragover', (event) => {
    event.preventDefault()
    Container.classList.add('active');
    headding.textContent = "drag and drop your img"
})

Container.addEventListener('dragleave', () => {
    Container.classList.remove('active')
    headding.textContent = "drag and drop"
})


Input.addEventListener('change', () => {
    MyFile = this.files[0]

    ShowMe()
})


Container.addEventListener('drop', (event) => {
    event.preventDefault();
    MyFile = event.dataTransfer.files[0];

    ShowMe()
})

function ShowMe() {
    let pyleType = MyFile.type;
    let balideEx = ['image/jpeg', 'image/jpg', 'image/png']

    if (balideEx.includes(pyleType)) {
        let fileReader = new FileReader()
        fileReader.onload = () => {
            let imgUrl = fileReader.result
            let img = `<img src="${imgUrl}" alt="" />`

            Container.innerHTML = img
        }
        fileReader.readAsDataURL(MyFile)
    }
    else {
        alert("file not mach")
    }
}