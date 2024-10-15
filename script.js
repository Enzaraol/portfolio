let hidden = false;
// Evento no botão para ligar e desligar a tela //
document.querySelector('.botao').addEventListener('click', function(){
    const tela = document.querySelector('.tela-apagada');
    const botao = document.querySelector('.botao');

    if (hidden === false) {
        botao.classList.toggle('botao-clicado');
        tela.classList.add('tela-opacidade');
        hidden = true;

    } else {
        botao.classList.remove('botao-clicado');
        tela.classList.remove('tela-opacidade');
        hidden = false;
    }
});


// Evento no botão janela para aparecer/desaparecer o sub-menu //
document.querySelector('#janela').addEventListener('click', function(){
    var submenu = document.querySelector('#sub-menu');
    if (submenu.style.display === 'none' || submenu.style.display == '') {
        submenu.style.display = 'block'
    } else {
        submenu.style.display = 'none';
    }
});
