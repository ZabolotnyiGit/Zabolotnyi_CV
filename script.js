document.addEventListener("DOMContentLoaded", function () {
    /* ЛОГИКА АККОРДЕОНА
       Работает в связке с CSS классами .active и .accordion-content
    */
    const accordions = document.querySelectorAll(".accordion-item");

    accordions.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");

        header.addEventListener("click", function () {
            const isActive = item.classList.contains("active");

            // 1. Закрываем все открытые секции перед открытием новой
            accordions.forEach(acc => {
                acc.classList.remove("active");
                acc.querySelector(".accordion-content").style.maxHeight = null;
            });

            // 2. Если нажатый элемент не был активен — открываем его
            if (!isActive) {
                item.classList.add("active");
                // Устанавливаем точную высоту контента
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    /* FIX ДЛЯ SENIOR УРОВНЯ:
       Пересчет высоты при изменении размера окна.
       Если пользователь перевернет телефон, текст не обрежется.
    */
    window.addEventListener('resize', function() {
        accordions.forEach(item => {
            if (item.classList.contains("active")) {
                const content = item.querySelector(".accordion-content");
                // Сбрасываем ограничение, чтобы получить новую реальную высоту
                content.style.maxHeight = null; 
                // Устанавливаем новую высоту
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
