/* function showMenu() {
    let active = false;
    let display = document.querySelector('.nav');
    display.style.display = 'block';
} */
let menu = document.querySelector('.menu-icon');
let statusMenu = false;

menu.addEventListener('click', function() {
    let display = document.querySelector('.nav');
    if(statusMenu == false) {
        display.style.display = 'block';
        display.id = 'activated'
        statusMenu = true;
    } else {
        statusMenu = false;
        display.style.display = 'none';
        display.id = 'deactivated'
    }
});