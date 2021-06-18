// Update UI
/*
async function update() {
    const request = await fetch("http://localhost:8080/updatePage");
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById("sentence").innerHTML = "You said..." + allData["entry"].sentence;
        document.getElementById("feeling").innerHTML = "The emotion of what you said is " + allData["entry"].feeling
        document.getElementById("confidence").innerHTML ="The confidence of this rating is " + allData["entry"].confidence + "%"
        document.getElementById("irony").innerHTML = "The irony rating of your statement is " + allData["entry"].irony
    } catch (error) {
        console.log("error", error);
    }
};

export { update }
*/