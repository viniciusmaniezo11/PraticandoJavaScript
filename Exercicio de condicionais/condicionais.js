//! =========================
//! Nivel Básico
//! =========================

//* 1. Verificar maioridade

const btnMaioridade = document.getElementById("checarMaioridade")

btnMaioridade.addEventListener("click", function () {
    const idade = document.getElementById("maioridade").value

    if (idade >= 18) {
        alert("Você é maior de idade")
    }
    else {
        alert("Você é menor de idade");
    }
})

//* 2. Verificar se um número é positivo ou negativo

const btnNegativo = document.getElementById("checarNegativo")

btnNegativo.addEventListener("click", function () {
    const numero = document.getElementById("negativo").value

    if (numero > 0) {
        console.log("Este número é positivo")
    }
    else {
        console.log("Este número é negativo")
    }
})

//* 3. Aprovação em uma prova

const btnNota = document.getElementById("checarNota")

btnNota.addEventListener("click", function () {
    const nota = document.getElementById("nota").value

    if (nota >= 60) {
        alert("Você foi aprovado")
    }
    else {
        alert("Você foi reprovado")
    }
})

//* 4. Verificar se um número é positivo, negativo ou zero

const btnZero = document.getElementById("checarZero")

btnZero.addEventListener("click", function () {
    const zero = document.getElementById("zero").value

    if (zero > 0) {
        alert("Número positivo")
    }
    else if (zero < 0) {
        alert("Número negativo")
    }
    else {
        alert("Número é zero")
    }
})

//* 5. Checagem de idade

const btnIdade = document.getElementById("checarIdade")

btnIdade.addEventListener("click", function () {
    const idade = document.getElementById("idade").value

    if (idade >= 0 && idade <= 12) {
        alert("Você é uma criança")
    }
    else if (idade >= 13 && idade <= 17) {
        alert("Você é um adolescente")
    }
    else if (idade >= 18) {
        alert("Você é um adulto")
    }
    else {
        alert("Idade invalida")
    }
})
