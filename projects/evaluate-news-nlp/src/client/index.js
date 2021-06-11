import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/base.css'
import './styles/footer.css'
import './styles/form.css'
import './styles/header.css'
import './styles/resets.css'


console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");

window.addEventListener('DOMContentLoaded', () => {
    const buttonSubmit = document.getElementById('btn-submit')
    buttonSubmit.addEventListener('click', e => {
        handleSubmit(e)
    })
})