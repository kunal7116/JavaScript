const form = document.querySelector('form');
//if we write this below mentioned line outside the eventlistener then it will give us empty value
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit',
    function (e) {
        e.preventDefault()
        const height = parseInt(document.querySelector('#height').value)
        const weight = parseInt(document.querySelector('#weight').value)
        const results = document.querySelector('#results')

        if (height == ' ' || height < 0 || isNaN(height)) {
            results.innerHTML = "Please give valid height"
        }

        else if (weight == ' ' || weight < 0 || isNaN(weight)) {
            results.innerHTML = "Please give valid weight";
        }

        else {
            const bmi = (weight / ((height * height) / 1000)).toFixed(2)
            //show the result
            if (bmi < 18.6) {
                results.innerHTML = `<span>${bmi}</span>` + " Under Weight"
            }

            else if (bmi > 18.6 && bmi < 24.9) {
                results.innerHTML = `<span>${bmi}</span>` + " Normal Range"
            }

            else {
                results.innerHTML = `<span>${bmi}</span>` + " Over Weight"
            }
        }

    }
)