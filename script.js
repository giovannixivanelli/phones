let russian = document.querySelector('.select__russian');
let spanish = document.querySelector('.select__spanish');
let english = document.querySelector('.select__english');
let select__language = document.querySelector('.select__language');
let welcomeText = document.querySelector('.welcoming');
let changeTheme = document.querySelector('.theme');
let mainTheme = document.querySelector('.main');
let contentText = document.querySelector('.content__text');

changeTheme.addEventListener("click", function () {
    mainTheme.style.backGround = 'Yellow';
});


russian.addEventListener('click', function (e) {
    welcomeText.textContent = 'Добро пожаловать на наш сайт!';
    select__language.textContent = 'Выберите язык'
    contentText.textContent = 'Ищете идеальный смартфон? Мы предлагаем широкий выбор новых и сертифицированных айфонов по лучшим ценам! Откройте для себя передовые технологии, стильный дизайн и надежную работу – все это в одном устройстве.'
});

english.addEventListener('click', function (e) {
    welcomeText.textContent = 'Welcome to our site!';
    select__language.textContent = 'Select the language'
    contentText.textContent = 'Are you looking for the perfect smartphone? We offer a wide selection of new and certified iPhones at the best prices! Discover cutting-edge technology, stylish design, and reliable performance – all in one device.'
});

spanish.addEventListener('click', function (e) {
    welcomeText.textContent = '¡Bienvenido/a nuestro sitio!';
    select__language.textContent = 'Elija la lengua';
    contentText.textContent = '¿Estás buscando el smartphone perfecto? ¡Ofrecemos una amplia selección de iPhones nuevos y certificados a los mejores precios! Descubre la tecnología de vanguardia, un diseño elegante y un rendimiento confiable, todo en un solo dispositivo.'
});



