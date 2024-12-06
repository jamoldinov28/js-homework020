const formEl = document.querySelector(".form")
const inputFname = document.querySelector(".form__fname")
const inputLname = document.querySelector(".form__lname")
const inputAge = document.querySelector(".form__age")
const inputProfession = document.querySelector(".form__profession")
const inputGender = document.querySelector(".form__gender")
const inputCountry = document.querySelector(".form__country")
const wrapperEl = document.querySelector(".wrapper")


formEl.addEventListener("submit",(even)=>{
    even.preventDefault()
    const cardEl = document.createElement("div")
    cardEl.className = "card"

    cardEl.innerHTML = `
    <h3>${inputFname.value}</h3>
    <h3>${inputLname.value}</h3>
    <p>${inputAge.value}</p>
    <h4>${inputProfession.value}</h4>
    <h4>${inputGender.value}</h4>
    <h3>${inputCountry.value}</h3>`

   wrapperEl.appendChild(cardEl)

   inputFname.value = ""
   inputLname.value = ""
   inputAge.value = ""
   inputProfession.value = ""
   inputGender.value = ""
   inputCountry.value = ""
    
} )