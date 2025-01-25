// Seleciona o elemento com a classe 'menu-hamburguer'
const menuHamburguer = document.querySelector('.menu-hamburguer')

// Adiciona um evento de clique ao menuHamburguer que chama a função toggleMenu quando clicado
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

// Define a função toggleMenu
function toggleMenu(){
    // Seleciona o elemento com a classe 'nav-responsive'
    const nav = document.querySelector('.nav-responsive');
    
    // Alterna a classe 'change' no menuHamburguer
    menuHamburguer.classList.toggle('change');

    // Verifica se o menuHamburguer possui a classe 'change'
    if (menuHamburguer.classList.contains('change')){
        // Se possuir, exibe o menu de navegação
        nav.style.display = 'block';
    } else{
        // Caso contrário, oculta o menu de navegação
        nav.style.display = 'none';
    }
}