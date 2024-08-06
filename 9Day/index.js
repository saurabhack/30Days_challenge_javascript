let first=document.querySelector("#first")
first.innerText="Hello World"
let btn=document.querySelector(".btn")
btn.style.backgroundColor="red"
let div=document.createElement("div")
div.innerText="some thing went wrongs"
div.style.color="red";
let body=document.querySelector('body')
body.appendChild(div)
let li=document.createElement("li")
li.innerText="akshay kumar"
let th=document.querySelector("#thrive")
th.appendChild(li)
th.remove(th.lastChild)
