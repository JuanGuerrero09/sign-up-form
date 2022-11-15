const submit = document.querySelector('.submit')
const subtitle = document.querySelector('#subtitle')
const inputs = document.querySelectorAll('input')

submit.addEventListener('click', (e)=>{
    e.preventDefault()
    inputs.forEach(input => input.value)
    if (checkPassword()) {
        subtitle.innerText = 'Well done'
    }
    else {
        subtitle.innerText = 'Please correct'
    }

})

const checkPassword = () => inputs[4].value == inputs[5].value

//TODO ALL FIELDS NECESARIES