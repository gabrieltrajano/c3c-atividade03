function obterDecimal(nota){
    // Essa função retorna um decimal que permitirá 
    // saber o quão próximo o número está de um múltiplo de 5.
    return (nota / 5) - parseInt((nota / 5))
}

function obterNotaFinal(nota){
    const decimal = obterDecimal(nota)

    // Condicional que vai fazer o arredondamento para um 
    // número múltiplo de 5 ou nada.
    if (decimal >= 0.58 && decimal < 0.60) {
        return nota + 2
    }  else if (decimal >= 0.80 && decimal < 0.81){
        return nota + 1
    } else {
        return nota
    }
}

function eAprovado(nota){
    return (nota >= 40 && nota <=100) ? true : false
}

function obterStatus(nota){
    if(eAprovado(nota)){
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

const btnObterResultado = document.querySelector("#obterResultado")

btnObterResultado.addEventListener("click", function(event){
    event.preventDefault()

    const notaBruta = parseInt(document.querySelector("#nota").value)
    const notaFinal = obterNotaFinal(notaBruta)

    const exibirResultado = document.querySelector("#exibirResultado")
    const status = obterStatus(notaFinal)
    exibirResultado.innerHTML = `${notaFinal} - ${status}`

}) 