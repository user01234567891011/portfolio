// alert("Мы используем cookie")
// function sending(){
//     confirm('Сообщение отправлено')
// }
let burger=document.querySelector('.burger-menu')
let menu=document.querySelector('.main-nav')
function openBurger(){
    burger.classList.toggle("active")
    menu.classList.toggle("active")
}
burger.addEventListener('click', openBurger)
$('.blog').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:'<img src="img/arrowL.png">',
  nextArrow:'<img src="img/arrowR.png">'
});