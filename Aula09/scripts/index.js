let paragrafo = document.getElementById("nome");
let pEstilizado = document.getElementById("paragrafo-estilizado")
let imagem = document.getElementById("imagem");

function exibir() {
    paragrafo.innerHTML = "Fernando Vinícius"
}

function ocultar() {
    paragrafo.innerHTML = ""
}

function ligar() {
    imagem.src = 'imgs/pic_bulbon.gif';
}

function desligar() {
    imagem.src = 'imgs/pic_bulboff.gif';
}

function estilizar() {
    pEstilizado.style.fontSize = '32px'
    pEstilizado.style = ""
}

function esconder() {
    document.getElementById("teste").style.display = 'none'
}

function exibirParagrafo() {
    document.getElementById("oculto").style.display = "block"
}

function exibirMensagem() {
    window.alert("Olá! Esta é a mensagem")
}

function visualizar() {
    
}