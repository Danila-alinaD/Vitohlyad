const sections = document.querySelectorAll('.section');

function showSections() {
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, index * 500); // Delay each section by 1 second
    });
}

// Trigger the animation when the page loads
window.addEventListener('load', showSections);