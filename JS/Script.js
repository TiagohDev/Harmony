let slideAtual = 0;
const slides = document.querySelectorAll('.projeto-slide');

function mostrarSlide(index) {
    // Remove a classe 'active' de todos os slides (esconde todos)
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Verifica os limites (para fazer o carrossel rodar em loop infinito)
    if (index >= slides.length) {
        slideAtual = 0; // Volta para a primeira foto
    } else if (index < 0) {
        slideAtual = slides.length - 1; // Vai para a última foto
    } else {
        slideAtual = index;
    }
    
    // Adiciona a classe 'active' ao slide correto (mostra a foto)
    slides[slideAtual].classList.add('active');
}

function moverCarrossel(direcao) {
    mostrarSlide(slideAtual + direcao);
}

// Bônus: faz o carrossel passar as fotos sozinho a cada 5 segundos
setInterval(() => {
    moverCarrossel(1);
}, 5000);