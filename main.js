const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menú y body
    menu.classList.toggle('active_nav');
    document.body.classList.toggle('opacity');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == '/img/3869892-200.png'){
        e.target.setAttribute('src','/img/open-menu2.png');
    }else{
        e.target.setAttribute('src','/img/3869892-200.png');
    }
});
