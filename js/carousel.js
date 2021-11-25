//Carrusel de imágenes

//Para que sea un carrusel infinito, la img 6 es a la vez la 0.

const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

//Poner el último elemento de primero para dar la vuelta al final
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function() {
        slider.style.transition ="none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    } , 500) ;
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});

function Prev() {
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length -1];
     slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function() {
        slider.style.transition ="none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft = "-100%";
    } , 500) ;
}

//Darle click a las miniaturas

var coll = document.getElementsByClassName("collapsible");
console.log(coll);
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null ;
    } else {
      content.style.maxHeight = "150px";
    } 
  });
}