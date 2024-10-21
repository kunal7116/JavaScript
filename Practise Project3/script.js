const clock = document.getElementById('clock')
//Same working:- const clock = document.querySelector('#clock')
setInterval(function () {
    let date = new Date();
    clock.innerHTML = "Date: " + date.toLocaleDateString() + `<br>` + "Time: " + date.toLocaleTimeString();
}, 1000)