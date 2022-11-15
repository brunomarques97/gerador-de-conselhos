const url="https://api.adviceslip.com/advice"
const mensagem=document.querySelector('#gerador')
mensagem.addEventListener('click',()=>{
    fetch(url).then((x)=>
    x.json()
    ).then((y)=>
        document.getElementById('mensagem').innerText=y.slip.advice
    );
})
fetch('https://www.googleapis.com/auth/cloud-translation').then(x=>
    console.log(x)
);