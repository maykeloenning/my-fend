import { checkForName } from './nameChecker'
//import { update } from './updateUI' 

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

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    if (isUrlValid(formText)) {
        console.log("::: Form Submitted :::")
        const res = await post ('http://localhost:8080/language', { msg: formText })
        console.log('res=======>', res)
        document.getElementById('sentence').innerHTML = res.sentence
        document.getElementById('feeling').innerHTML = res.feeling
        document.getElementById('irony').innerHTML = res.irony
        document.getElementById('confidence').innerHTML = res.confidence
    }
}

function isUrlValid(userInput) {
   var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);      
   if(res == null)
        return false;
    else
        return true;
}

export { handleSubmit }