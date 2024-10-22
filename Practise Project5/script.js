//This code is written when there is only single button that is used for stopping the event to get executed, main aim to write this code is to understand the concept of setTimeout() and clearTimeout() method.

// const changeHeading = function () {
//     document.querySelector('h1').innerHTML = "Text has changed";
// }
// const changeMe = setTimeout(changeHeading, 2000);

// document.querySelector('#stop').addEventListener('click',
//     function () {
//         clearTimeout(changeMe)
//         console.log('button clicked');
//     }
// )

//------------------------------------
//This below code is return for better understanding of setInterval()and clearInterval() method.
// const sayDate = function () {
//     console.log("xyz", Date.now())
// }
// let intervalId;
// document.querySelector('#start').addEventListener('click', function () {
//     intervalId = setInterval(sayDate, 1000)
// })

// document.querySelector('#stop').addEventListener('click', function () {
//     clearInterval(intervalId)
// })
let intervalId;
const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

const startChangingColor = function () {
    intervalId = setInterval(changeBackground, 1000)
    function changeBackground() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function () {
    clearInterval(intervalId);
}

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);