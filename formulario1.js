fetch('https://api.adviceslip.com/advice').then(resposta=>{
    return resposta.json()
}).then(resposta2=>{
    document.getElementById("mensagem").innerText=resposta2.advice
})
    


