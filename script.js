const sections = document.querySelectorAll('.section');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
    );
}

function handleScroll() {
    sections.forEach((section) => {
        if (isInViewport(section) && !section.classList.contains('visible')) {
            section.classList.add('visible');
        }
    });
}

function showInitialSections() {
    let delay = 0;
    sections.forEach((section) => {
        if (isInViewport(section)) {
            setTimeout(() => {
                section.classList.add('visible');
            }, delay);
            delay += 300;
        }
    });
}

window.addEventListener('load', () => {
    setTimeout(showInitialSections, 100);
});

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.desktop-header .menu li');

    menuItems.forEach(item => {
        const submenu = item.querySelector('ul');
        if (submenu) {
            const link = item.querySelector('a');
            
            link.addEventListener('click', function(e) {
                if (link.getAttribute('href') === '#') {
                    e.preventDefault();
                }
                
                const isOpen = submenu.classList.contains('open');
                
                menuItems.forEach(otherItem => {
                    const otherSubmenu = otherItem.querySelector('ul');
                    if (otherSubmenu) {
                        otherSubmenu.classList.remove('open');
                    }
                });
                
                if (!isOpen) {
                    submenu.classList.add('open');
                }
            });
        }
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.desktop-header .menu')) {
            menuItems.forEach(item => {
                const submenu = item.querySelector('ul');
                if (submenu) {
                    submenu.classList.remove('open');
                }
            });
        }
    });
});
