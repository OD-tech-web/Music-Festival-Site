let menuBtn = document.querySelector(".menu-btn");
let list = document.querySelector(".list");
let overlay = document.querySelector(".overlay");


menuBtn.addEventListener('click', () => {
    list.classList.toggle("show_hide");
    overlay.classList.toggle("show_hideOverlay");
});

overlay.addEventListener('click', ()=> {
    overlay.classList.toggle('show_hideOverlay');
    list.classList.toggle('show_hide')
})