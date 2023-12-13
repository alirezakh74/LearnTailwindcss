// const burgerBtn = document.querySelector("#burger-btn");
// const menu = document.querySelector("#menu");

// burgerBtn.addEventListener('click', () => {
//     menu.classList.toggle("hidden");
// });

$("#burger-btn").click(function () {
    $("#menu").slideToggle();
});