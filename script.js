document.addEventListener('DOMContentLoaded', function() {
    const menuLink = document.getElementById('menu-link');
    const menuContainer = document.querySelector('.menu-container');
    const closeBtn = document.querySelector('.close-btn');

    menuLink.addEventListener('click', function(e) {
        e.preventDefault();
        menuContainer.classList.add('active');
    });

    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        menuContainer.classList.remove('active');
    });
});

//illustrations sliding in when the website loads

document.addEventListener('DOMContentLoaded', function() {
    const dogsImages = document.querySelectorAll('.dogs img');

    dogsImages.forEach(function(img) {
        img.style.opacity = 0;
        if (img.classList.contains('dog')) {
            img.style.transform = 'translateX(-20px)';
        } else if (img.classList.contains('pup') || img.classList.contains('lying')) {
            img.style.transform = 'translateX(20px)';
        }
    });

    let opacity = 0;
    let positionLeft = -20;
    let positionRight = 20;
    const interval = 50;
    const increment = 0.05;
    const positionIncrement = 1;

    function fadeIn() {
        opacity += increment;
        positionLeft -= positionIncrement;
        positionRight += positionIncrement;

        if (opacity >= 1) {
            clearInterval(fadeInterval);
        }

        dogsImages.forEach(function(img) {
            img.style.opacity = opacity;
            
            if (img.classList.contains('dog')) {
                img.style.transform = 'translateX(${positionLeft}px)';
            } else if (img.classList.contains('pup') || img.classList.contains('lying')) {
                img.style.transform = 'translateX(${positionRight}px)';
            }
        });
    }

    const fadeInterval = setInterval(fadeIn, interval);
});