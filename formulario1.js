const url="https://api.adviceslip.com/advice"
const proximo=document.querySelector('#proximo')
mensagem.addEventListener('click',()=>{
    fetch(url).then((x)=>
    x.json()
    ).then((y)=>
        document.getElementById('proximo').innerText=y.slip.advice
    );
})
