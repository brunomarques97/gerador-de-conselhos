const url="https://api.adviceslip.com/advice/2"
const proximo=document.querySelector('#proximo')
mensagem.addEventListener('click',()=>{})



//document.getElementById('proximo').innerText=y.slip.advice
fetch("https://api.adviceslip.com/advice/2").then((promise)=>
    promise.json()
    .then((y)=>
    console.log(y.slip.advice))
    );