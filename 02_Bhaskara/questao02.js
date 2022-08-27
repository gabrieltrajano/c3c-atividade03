function bhaskara(a, b, c){
    const delta = (b * b) - 4 * a * c;
    if (delta > 0){
        let vetorResultado = []

        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        vetorResultado.push(x1)

        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        vetorResultado.push(x2)

        return vetorResultado

    } else {
        return "Delta é negativo"
    }
}

const btnCalcular = document.querySelector("#btnCalcular")
btnCalcular.addEventListener("click", function(event){
    event.preventDefault()

    const a = parseInt(document.querySelector("#inputA").value)
    const b = parseInt(document.querySelector("#inputB").value)
    const c = parseInt(document.querySelector("#inputC").value)

    const exibeResultado = document.querySelector("#exibeResultado")
    resultado = bhaskara(a, b, c)
    exibeResultado.innerHTML = resultado
})