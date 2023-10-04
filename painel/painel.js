/* quando clica na seta avança ,temos que esconde todoas as imagens e mostrar as imagens seguintes
 imagem atual começa em 0  assim que for cicado no avança preciso adicionar mais 1 ao contador de imagens
para poder saber qual imagem mostrar, que seria a segunda...e depois esconder todads as imagens,pegan todas as imagens usando o don e remover a classe mostrar...p´roximo objetivo mostrar a proxima imagem e pegar todas as imagens,descobrir qual é a próxima para colocar a classe mostrar. */



const imagens = document.querySelectorAll('.imagem-painel')
const setaVoltar = document.getElementById('btn-voltar')
const setaAvancar = document.getElementById('btn-avancar')
let imagemAtual = 0

function esconderImagens() {
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem() {
    imagens[imagemAtual].classList.add('mostrar')
}


setaAvancar.addEventListener('click', function () {
    if (imagemAtual !== imagens.length - 1) {
        imagemAtual++
    }

    esconderImagens()
    mostrarImagem()

})

setaVoltar.addEventListener('click', function () {
    if (imagemAtual !== 0) {
        imagemAtual--
    }

    esconderImagens()
    mostrarImagem()

})