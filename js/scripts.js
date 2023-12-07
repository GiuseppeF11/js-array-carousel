// Js-Array-Carousel

/* 

MILESTONE 1) Fare il MARKUP STATICO: metti gli elementi nel Html e sistema come appaiono con Css

MILESTONE 2) Creare un array delle immagini, rendendo tutte le immagini nascoste
tranne la prima.

-Assegnare ad ogni img una variabile
-Inserire le immagini in un array
-Assegnare alla prima img classe active e alle altre deactive così da non farle vedere
*/

/* const album = [
    item1 ,
    "img/02.webp" ,
    "img/03.webp" ,
    "img/04.webp" ,
    "img/05.webp"
]

const items = document.querySelector('#items');
console.log (items);

const item1 = document.createElement('div');
item1.classList.add('item','active');
const img1 = document.createElement('img');
img1.src = 'img/01.webp'
item1.append(img1);

const item2 = document.createElement('div');
item2.classList.add('item','active');
const img2 = document.createElement('img');
img2.src = 'img/02.webp'
item2.append(img2);

const item3 = document.createElement('div');
item3.classList.add('item','active');
const img3 = document.createElement('img');
img3.src = 'img/03.webp'
item3.append(img3);

const item4 = document.createElement('div');
item4.classList.add('item','active');
const img4 = document.createElement('img');
img4.src = 'img/04.webp'
item4.append(img4);

const item5 = document.createElement('div');
item5.classList.add('item','active');
const img5 = document.createElement('img');
img5.src = 'img/05.webp'
item5.append(img5);

.item{
    ..
    display:none;
}
.item.active{
    display:block;
}



for (let x = 0 ; x < album.length ; x++) {
    items.append(album[x]);
    console.log(x);
}

const x = 0;

album[x].classList.add('d-none');
x++;
album[x].classList.add('d-block');
 */

const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  // Per ogni elemento del carosello aggiungo la classe d-none
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });

  //Per l'elemento selezionato dal contatore aggiungo la classe d-block
  carouselItems[index].style.display = 'block';
}

// All'avvio mostro la prima slide (che ha indice 0)
showSlide(currentIndex);

 /* Quando clicco il tasto next viene 
 incrementato il contatore e quindi mostrata
  la slide seguente */
document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
  });

   /* Quando clicco il tasto prev viene 
 diminuito il contatore e quindi mostrata
  la slide precedente */
document.getElementById('prevBtn').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
  });