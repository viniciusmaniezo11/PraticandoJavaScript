const elementos = document.querySelectorAll(".texto");

//* Percorrendo a lista e imprimindo cada um dos elementos
elementos.forEach(elemento => console.log(elemento));

//* Percorrendo a lista e pegando o texto do elemento (innerText)
elementos.forEach(elemento => console.log(elemento.innerText));

//* Alterando textos
elementos.forEach(elemento => {
    elemento.innerText = "Alterado";

    //elemento.textContent = "Alterado"; //* Vem com a formatação do elemento.
})

//* Trocando tags - innerHTML
elementos.forEach(elemento => {
    elemento.innerHTML = "<h2>item</h2>";
})

//* Trocar a cor do elemento;
elementos.forEach(elemento => {
    elemento.style.color = "#0000ff";
})

//* Eventos com JS - Ações do usuário

//* Evento click
const botao = document.getElementById("btn")

botao.addEventListener("click", function() {
    alert("Você clicou!");
})

//* Evento de digitação (INPUT / KEYUP)
const campo = document.getElementById("campo");
const resultado = document.getElementById("resultado");

//* INPUT - Dispara sempre que digita, em tempo real
// campo.addEventListener("input", () => {

//     //* Value -> é o valor de dentro do campo, ou seja, oque esta sendo digitado
//     resultado.innerText = campo.value;
// })

//* KEYUP - Dispara apenas quando solta a tecla
campo.addEventListener("keyup", () => {

    //* Value -> é o valor de dentro do campo, ou seja, oque esta sendo digitado
    resultado.innerText = campo.value;
})

//? Evento do mouse
const elemento = document.getElementById("troca-cor");

//* mouseover -> Quando passar o mouse peo elemento
elemento.addEventListener("mouseover", () => {
    elemento.style.backgroundColor = "#ff0000"
})

//* mouseout -> Quando o mouse sai do elemento
elemento.addEventListener("mouseout", () => {
    // elemento.style.backgroundColor = "#0000ff"
    elemento.style.backgroundColor = ""
})

//* mousemove -> Pega a posição do mouse
// document.addEventListener("mousemove", (evento) => {
//     console.log(`Posição X: ${evento.clientX}, Posição Y ${evento.clientY}`);
    
// })

//? Evento de formulario (submit)

// const form = document.querySelector("form") //* Pegando pela tag <form>

//* O comportamento padrão do formulario é recarregar a pagina ao enviar o default
// form.addEventListener("submit", (e) =>  {
//     e.preventDefault(); //* Bloqueia o comportamento padrão do formulario

//     const nome = document.getElementById("nome").value

//     console.log(`Nome: ${nome}`);
    
// })

//? Criando elementos na página
// const novoElemento = document.createElement("p"); //* Cria o elemento <p>
// novoElemento.innerText = "Elemento novo criado."; //* Cria um texto no elemento

// const form = document.getElementById("form");


// form.appendChild(novoElemento); //* Atribui um elemento filho (<p>) dentro do pai (<form>)

// const button = document.createElement("button");
// button.innerText = "Excluir elemento";
// form.appendChild(button);

// button.addEventListener("click", (e) => {
//     e.preventDefault();

//     novoElemento.remove();

     //* Apagando direto do pai
     // form.removeChild(novoElemento);
// })

//? Adicionando elementos em uma lista via <input>

const input = document.getElementById("input"); // Input
const button = document.getElementById("add"); // Botao
const lista = document.getElementById("lista"); // ul

button.addEventListener("click", () => {
    const valorDigitado = input.value; //* Armazena oque é digitado dentro do input

    const li = document.createElement("li"); //* Criando <li>
    li.innerText = valorDigitado;

    lista.appendChild(li); //* Colocando <li> dentro do pai <ul>

    input.value = ""
})