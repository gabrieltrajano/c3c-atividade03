function obterDecimal(nota){
    // Essa função retorna um decimal que permitirá 
    // saber o quão próximo o número está de um múltiplo de 5.
    return (nota / 5) - parseInt((nota / 5))
}

function obterNotaFinal(nota){
    const decimal = obterDecimal(nota)

   // Verifica se o nota deve ser incrementada e o quanto deve ser incrementado
    if (decimal >= 0.58 && decimal < 0.60) {
        return nota + 2
    }  else if (decimal >= 0.80 && decimal < 0.81){
        return nota + 1
    } else {
        return nota
    }
}

function obterStatus(nota){
    if(nota >= 40 && nota <=100){
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

    const exibeResultado = document.querySelector("#exibeResultado")
    const status = obterStatus(notaFinal)
    exibeResultado.innerHTML = `${notaFinal} - ${status}`

}) 