//! =========================
//! Nivel Básico
//! =========================

//* 1. Contagem de 1 a 10:

for (let i = 0; i < 11; i++) {
    console.log(i)
}

//* 2. Tabuada de um número:

const btnTabuada = document.getElementById("enviarTabuada")

btnTabuada.addEventListener ("click", function() {
    const tabuada = document.getElementById("tabuada").value;

    for (let i = 0; i < 11; i++) {
        console.log(`${tabuada} X ${i} = ${tabuada * i}`  )
    }
})

//* 3. Soma de N números naturais

//10 = numero selecionado
let valorAnterior = 0

const btnNaturais = document.getElementById("enviarNaturais")

btnNaturais.addEventListener("click", function() {
    const numero = document.getElementById("naturais").value

    for (let i = 1; i <= numero; i++) {
    valorAnterior = i + valorAnterior
    console.log(valorAnterior)
}
})
