document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentSlide = 0;

    // Função para mostrar o slide atual
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    };

    // Função para avançar para o próximo slide
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    // Função para retroceder para o slide anterior
    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    // Adiciona event listeners aos botões
    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }
    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }

    // Exibe o primeiro slide ao carregar a página
    showSlide(currentSlide);
});