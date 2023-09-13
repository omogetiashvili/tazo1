let burger = document.querySelector(".burgerdiv")
let svg = document.querySelector(".svg")
let xmark = document.querySelector(".xmark")
let h3 = document.querySelector("#h3")
let name = document.querySelector("#name")
let age = document.querySelector("#age")
let size = document.querySelector("#size")
let height = document.querySelector("#height")
let send = document.querySelector(".send")

let x = name.value



send.addEventListener("click", () => {
  if(age.value > 18){
    h3.textContent = `გილოცავ ${name.value} აყვანილი ხართ`
    h3.style.color = "yellow"
  } else {
    h3.textContent = `გააჯვი ${name.value} აქედან, ზედმეტად პატარა ხარ`
    h3.style.color = "red"
  }
})

send.addEventListener("click",  () => {
  if(size.value > 18 && age.value > 18){
    h3.textContent = `გილოცავ ${name.value} აყვანილი ხარ `
    h3.style.color = "yellow"
  } else {
    h3.textContent = `გააჯვი ${name.value} აქედან, ზედმეტად პატარა გაქ`
    h3.style.color = "red"

  }
})






































svg.addEventListener("click", () => {
  burger.classList.toggle("active")
})
xmark.addEventListener("click", () => {
  burger.classList.toggle("active")
})
