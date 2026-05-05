document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const menuItemsWithSub = document.querySelectorAll('.menu-item-with-sub');
    const backBtns = document.querySelectorAll('.back-btn');
    let currentLevel = 1;

    if (burgerBtn && mobileNav && mobileOverlay) {
        burgerBtn.addEventListener('click', function() {
            burgerBtn.classList.toggle('active');
            mobileNav.classList.toggle('open');
            mobileOverlay.classList.toggle('show');
            
            if (!mobileNav.classList.contains('open')) {
                resetMenu();
            }
        });

        mobileOverlay.addEventListener('click', function() {
            burgerBtn.classList.remove('active');
            mobileNav.classList.remove('open');
            mobileOverlay.classList.remove('show');
            resetMenu();
        });
    }

    function resetMenu() {
        currentLevel = 1;
        const allLevels = document.querySelectorAll('.menu-level');
        allLevels.forEach(level => {
            level.classList.remove('active', 'slide-left');
        });
        const firstLevel = document.querySelector('.menu-level-1');
        if (firstLevel) {
            firstLevel.classList.add('active');
        }
    }

    resetMenu();

    menuItemsWithSub.forEach(item => {
        item.addEventListener('click', function() {
            const targetLevel = item.getAttribute('data-sublevel');
            const targetLevelEl = document.querySelector(`.menu-level-${targetLevel}`);
            
            if (targetLevelEl) {
                const currentLevelEl = document.querySelector(`.menu-level-${currentLevel}`);
                if (currentLevelEl) {
                    currentLevelEl.classList.add('slide-left');
                    currentLevelEl.classList.remove('active');
                }
                
                targetLevelEl.classList.add('active');
                targetLevelEl.classList.remove('slide-left');
                
                currentLevel = parseInt(targetLevel);
            }
        });
    });

    backBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const parentLevel = 1;
            const parentLevelEl = document.querySelector(`.menu-level-${parentLevel}`);
            
            if (parentLevelEl) {
                const currentLevelEl = document.querySelector(`.menu-level-${currentLevel}`);
                if (currentLevelEl) {
                    currentLevelEl.classList.remove('active');
                    currentLevelEl.classList.add('slide-left');
                }
                
                parentLevelEl.classList.add('active');
                parentLevelEl.classList.remove('slide-left');
                
                currentLevel = parentLevel;
            }
        });
    });
});
