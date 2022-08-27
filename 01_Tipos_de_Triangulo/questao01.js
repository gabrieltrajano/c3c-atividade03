function verificaTipoTriangulo(ladoA,ladoB,ladoC){
    if (ladoA == ladoB && ladoB == ladoC) {
         return "Equilátero"
    } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
         return "Isóceles"
    } else {
         return "Escaleno"
    }
 }

 const btnVerificaTipo = document.querySelector('#verificarTipo')
 btnVerificaTipo.addEventListener("click", function(event){
     event.preventDefault()

     const ladoA = parseFloat(document.querySelector("#ladoA").value)
     const ladoB = parseFloat(document.querySelector("#ladoB").value)
     const ladoC = parseFloat(document.querySelector("#ladoC").value)

     const resultadoTipoTriangulo = verificaTipoTriangulo(ladoA, ladoB, ladoC)

     const exibeResultado = document.querySelector("#exibeResultado")
     exibeResultado.innerHTML = resultadoTipoTriangulo
 })