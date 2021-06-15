import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { update } from './js/updateUI'

import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

export {
    update,
    checkForName,
    handleSubmit
   }
   
console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");

window.addEventListener('DOMContentLoaded', () => {
    const buttonSubmit = document.getElementById('btn-submit')
    buttonSubmit.addEventListener('click', e => {
        handleSubmit(e)
    })
})