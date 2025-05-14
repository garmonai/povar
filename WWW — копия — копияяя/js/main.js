// Меню на мобильных устройствах
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('header nav ul');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Контактная кнопка
document.getElementById('contactButton').addEventListener('click', function() {
    alert('Спасибо за интерес! Мы свяжемся с вами.');
});

// Анимация наведения на изображения продуктов
const productImages = document.querySelectorAll('.product-item img');
productImages.forEach(img => {
    img.addEventListener('mouseover', function() {
        img.style.transform = 'scale(1.1)';
    });

    img.addEventListener('mouseout', function() {
        img.style.transform = 'scale(1)';
    });
});
