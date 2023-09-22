document.addEventListener("DOMContentLoaded", function () {
    const spoilerButton = document.querySelector(".spoiler-button-c");
    const spoilerContent = document.querySelector(".spoiler-content-c");

    spoilerButton.addEventListener("click", function () {
        if (spoilerContent.style.display === "none" || spoilerContent.style.display === "") {
            spoilerContent.style.display = "block";
        } else {
            spoilerContent.style.display = "none";
        }
    });
});