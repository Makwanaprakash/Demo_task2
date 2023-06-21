var getID = document.getElementById('menuBlock');
getID.addEventListener('click', function(){
    document.body.classList.toggle('menu-active');
});
var myCarousel = document.querySelector('#HeroBanner')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
})
