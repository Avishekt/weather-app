console.log("Client side js is loading");




const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")



weatherForm.addEventListener('submit', (item) => {
    item.preventDefault()
    const location = search.value.replace(/;/g, "")

    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }

        })
    })
})
