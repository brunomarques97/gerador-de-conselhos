const url="https://api.adviceslip.com/advice"
fetch(url).then((x)=>
    x.json()
    ).then((y)=>
        document.getElementById('mensagem').innerText=y.slip.advice
    );