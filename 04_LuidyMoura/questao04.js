function verificaESubstitui(numero){
    let restoCinco = numero%5
    let restoNove = numero%9

    if (restoCinco == 0  && restoNove == 0){
        return "LuidyMoura"
    } else if (restoCinco == 0){
        return "Luidy"
    } else if (restoNove == 0){
        return "Moura"
    } else {
        return numero
    }
}

function criaEPecorreArray(limite){
    let arrayTemp = []
    for(i=1; i<=limite; i++){
        arrayTemp.push(verificaESubstitui(i))
    }
    return arrayTemp
}

const btnProcessarArray = document.querySelector("#btnProcessarArray")
btnProcessarArray.addEventListener("click", function(event){
    event.preventDefault()

    const limite = parseInt(document.querySelector("#limite").value)

    let resultado = criaEPecorreArray(limite)
    const exibeResultado = document.querySelector("#exibeResultado")
    exibeResultado.innerHTML = resultado
})