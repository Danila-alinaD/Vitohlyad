// Отримуємо всі кнопки спойлерів
    var spoilerButtons = document.querySelectorAll(".spoiler-button-m");

    // Додаємо обробник події для кожної кнопки
    spoilerButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Знаходимо наступний елемент (можливий текстовий вузол)
            var nextElement = this.nextElementSibling;

            // Шукаємо наступний елемент, який не є текстовим вузлом
            while (nextElement && nextElement.nodeType !== 1) {
                nextElement = nextElement.nextSibling;
            }

            // Перевіряємо, чи спойлер розгорнутий
            if (nextElement.style.display === "block") {
                // Якщо розгорнутий, то ховаємо вміст
                nextElement.style.display = "none";
            } else {
                // Якщо не розгорнутий, то відображаємо вміст
                nextElement.style.display = "block";
            }
        });
    });