const min=1
const max= 101
let numero= Math.floor(Math.random() * (max-min))+min
const proximo=document.querySelector('#proximo')
const anterior=document.querySelector('#anterior')
const procura=document.querySelector('#procura')
const input=document.querySelector("input")


fetch("https://api.adviceslip.com/advice/"+ numero).then((promise)=>
    promise.json()).then((y)=>    
    document.getElementById('mensagem').innerText=y.slip.advice
    );

proximo.addEventListener('click',()=>{
    let proximoID = numero+1

    fetch("https://api.adviceslip.com/advice/"+ proximoID).then((promise)=>
    promise.json()).then((y)=>
    document.getElementById('mensagem').innerText=y.slip.advice
    );
    numero=proximoID
});
anterior.addEventListener('click',()=>{
    let anteriorID = numero-1

    fetch("https://api.adviceslip.com/advice/"+ anteriorID).then((promise)=>
    promise.json())
    .then((y)=>
    document.getElementById('mensagem').innerText=y.slip.advice
    );
    numero=anteriorID
});
procura.addEventListener('click',()=>{
    let numerodigitado=input.value

    fetch("https://api.adviceslip.com/advice/"+ numerodigitado).then((promise)=>
    promise.json())
    .then((y)=>
    document.getElementById('mensagem').innerText=y.slip.advice
    );
});