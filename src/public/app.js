const navSlide = () => {
    const box = document.querySelector('.box');
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li');

    box.addEventListener('click', () => {
        //Toggle Nav   
        nav.classList.toggle('nav-active');

        //Animated Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';                
            }
            else{
                link.style.animation = 'NavLinkFade 0.5s ease forwards ${index / 7 + 0.3}s';
            }     
        });
        // box animation
        box.classList.toggle('toggle');
    });
}

navSlide();