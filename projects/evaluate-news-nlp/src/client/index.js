import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");



window.addEventListener('DOMContentLoaded', () => {
    const buttonSubmit = document.getElementById('btn-submit')
    buttonSubmit.addEventListener('click',() => {
        handleSubmit()
    })
})