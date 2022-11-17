const min=1
const max= 501
let numero= Math.floor(Math.random() * (max-min))+min
const proximo=document.querySelector('#proximo')
mensagem.addEventListener('click',()=>{})
console.log(numero)

fetch("https://api.adviceslip.com/advice").then((promise)=>
    promise.json())
    .then((y)=>
    document.getElementById('mensagem').innerText=y.slip.advice
    );