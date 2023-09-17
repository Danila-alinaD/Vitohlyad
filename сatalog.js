document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".filter");
    const games = document.querySelectorAll(".game");

    filters.forEach((filter) => {
        filter.addEventListener("change", filterGames);
    });

    function filterGames() {
        const selectedCategories = Array.from(filters)
            .filter((filter) => filter.checked)
            .map((filter) => filter.getAttribute("data-category"));

        games.forEach((game) => {
            const gameCategories = game.getAttribute("data-categories").split(" ");
            if (selectedCategories.every((category) => gameCategories.includes(category))) {
                game.style.display = "block";
            } else {
                game.style.display = "none";
            }
        });
    }
});