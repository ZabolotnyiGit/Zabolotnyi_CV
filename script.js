<script async src="https://www.googletagmanager.com/gtag/js?id=G-TKLMJSN7ZQ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TKLMJSN7ZQ');
</script>

<script>
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion-item");

    accordions.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");

        header.addEventListener("click", function () {
            const isActive = item.classList.contains("active");

            // Закрываем все аккордеоны
            accordions.forEach(acc => {
                acc.classList.remove("active");
                acc.querySelector(".accordion-content").style.maxHeight = null;
            });

            // Если не было активным, открываем
            if (!isActive) {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
</script>
