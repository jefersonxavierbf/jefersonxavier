// Ao Carregar Janela Surgem Itens da Página
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animateScroll() {
    target.forEach(element => element.classList.add('animate'));
}

window.addEventListener('DOMContentLoaded', animateScroll);