const procura=document.querySelector('#procura')

fetch("https://api.adviceslip.com/advice").then((promise)=>
    promise.json().then((res)=>(
    document.getElementById('id').innerText="Advice #"+res.slip.id
)));

procura.addEventListener('click',()=>{
    fetch("https://api.adviceslip.com/advice").then((promise)=>
    promise.json())
    .then((res)=>
    document.getElementById('id').innerText="Advice #"+res.slip.id
    );
});

fetch("https://api.adviceslip.com/advice").then((promise)=>
    promise.json().then((res)=>(
    document.getElementById('mensagem').innerText=res.slip.advice
)));

procura.addEventListener('click',()=>{
    fetch("https://api.adviceslip.com/advice").then((promise)=>
    promise.json())
    .then((res)=>
    document.getElementById('mensagem').innerText=res.slip.advice    
    );
});