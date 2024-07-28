//variables

//funciones



/*Funcion externa*/
//funcion que permite un scroll suavizado entre secciones
const links = document.querySelectorAll('a');

links.forEach((link) => {

    link.addEventListener('click', (e) => {
        
        const target = e.currentTarget.getAttribute('href');

        e.preventDefault();
        replegarMenu();
        document.querySelector(target).scrollIntoView(
        {
            behavior: 'smooth'
        });

    });

}); 