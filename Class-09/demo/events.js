const header = document.getElementById('myHeader')
const btn1 = document.createElement('button');
btn1.textContent = "click me!"
const btn2 = document.createElement('button');
btn2.textContent = "surprise me!"

header.appendChild(btn1);
header.appendChild(btn2);


btn1.addEventListener('click', handleClick);
function handleClick() {
    alert('hi');
}
