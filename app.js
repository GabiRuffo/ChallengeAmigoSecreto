//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

let amigoSecreto = [];

function adicionarAmigo(){
    const nomeDoAmigo = document.getElementById("amigo");
    const nome = nomeDoAmigo.value.trim();

    if (nome == ""){
        alert("Please, informe o nome do amigo secreto"); 
        return;
    }

    amigoSecreto.push(nome);
    console.log(amigoSecreto);

    nomeDoAmigo.value = "";
    exibirAmigos();
}

function exibirAmigos(){
    const lista = document.querySelector("#listaAmigos"); 
    lista.innerHTML = "";
    console.log("Lista limpa")

    for (let i = 0; i < amigoSecreto.length; i++){
        const li = document.createElement("li")
        li.textContent = amigoSecreto[i]
        lista.appendChild(li);
    }
}
function sortearAmigo() {
    if (amigoSecreto.length < 2 || amigoSecreto.length === 0) { 
        alert("Voce ainda nao informou um nome para sorteio.");
        return;
    } 
 
    const indiceAleatorio = Math.floor(Math.random() * amigoSecreto.length);
    const amigoSorteado = amigoSecreto[indiceAleatorio];
    const resultado = document.querySelector("#resultado");
    
    resultado.innerHTML = `Seu amigo secreto é: <strong>${amigoSorteado}</strong>`;
}