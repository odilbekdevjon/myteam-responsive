let menu = document.getElementById('menu');
let close = document.getElementById('close');
let list = document.getElementById('menu-list');

menu.addEventListener('click', function () {
    list.style.display = 'block';
})

close.addEventListener('click', function () {
    list.style.display = 'none';
})