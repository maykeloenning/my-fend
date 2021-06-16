import { checkForName } from './nameChecker'
import { update } from './updateUI' 

const post = async (url = '', data = {}) => {
    const response = await fetch (url, {
        method: 'POST',
        credentials: "same-origin",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    post('http://localhost:8080/test', { msg: formText })
    .then(res => res.json())
    .then(function (res) {
        document.getElementById('results').innerHTML = res.message
    })
}

function isUrlValid(userInput) {
   var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);      
   if(res == null)
        return false;
    else
        return true;
}

export { handleSubmit }