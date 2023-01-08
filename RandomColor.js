const body = document.querySelector('#body')
const color = document.querySelector('#color')
const mainBut = document.querySelector('#mainBut')

mainBut.addEventListener('click', () => {
    const numb1 = Math.floor(Math.random() * 256);
    const numb2 = Math.floor(Math.random() * 256);
    const numb3 = Math.floor(Math.random() * 256);

    color.innerText = `rgb(${numb1},${numb2},${numb3})`;
    body.style.backgroundColor = `rgb(${numb1},${numb2},${numb3})`;

    if (numb1 <= 40 && numb2 <= 40 && numb3 <= 40){
        color.style.color = 'white'
    }
    else {
        color.style.color = 'black'
    }
})