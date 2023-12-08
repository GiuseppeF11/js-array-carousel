// Js-Array-Carousel

/* 
MILESTONE 1) Fare il MARKUP STATICO: metti gli elementi nel Html e sistema come appaiono con Css

MILESTONE 2) Creare un array delle immagini, rendendo tutte le immagini nascoste
tranne la prima.

-Assegnare una variabile per selezionare le slides del carosello
-Impostare un contatore
-Aggiungere la classe d-none a tutti gli elementi
-Aggiungere la classe d-block al singolo elemento selezionato

MILESTONE 3) Impostare funzione al click destro e sinistro per far cambiare immagine
*/

/* 



PRIMA SOLUZIONE



*/

/* 
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Imposto una funzione per aggiungere ad ogni slide la classe d-none
function showSlide(index) {
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });

  //Per l'elemento selezionato dal contatore aggiungo la classe d-block
  carouselItems[index].style.display = 'block';
}

// All'avvio mostro la prima slide (che ha l'indice corrente)
showSlide(currentIndex);

// Quando clicco il tasto next viene incrementato il contatore e quindi mostrata la slide seguente
document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
  });

// Quando clicco il tasto prev viene diminuito il contatore e quindi mostrata la slide precedente
document.getElementById('prevBtn').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
  });

 */




/* 


SECONDA SOLUZIONE


*/
//Creo le singole immagini

const img1 = document.createElement('img');
img1.setAttribute('src','img/01.webp')

const img2 = document.createElement('img');
img2.setAttribute('src','img/02.webp')

const img3 = document.createElement('img');
img3.setAttribute('src','img/03.webp')

const img4 = document.createElement('img');
img4.setAttribute('src','img/04.webp')

const img5 = document.createElement('img');
img5.setAttribute('src','img/05.webp')

console.log(img1 , img2, img3, img4, img5);

// metto le immagini dentro un array chiamato album

const album = [img1 , img2, img3, img4, img5]

//creo la slide dove appariranno le immagini
const slide = document.createElement('div');
console.log(slide , typeof slide);

slide.classList.add('slide');

//appendo la prima immagine alla slide
slide.append(img1);

//prendo il carousel-container da HTML e appendo dentro la slide che a sua volta ha dentro l'immagine
const carouselContainer = document.getElementById('carousel-container');

carouselContainer.append(slide)
console.log(carouselContainer);

/* 

creo un ciclo che si attiva al click della freccia destra

*/
const nextBtn = document.getElementById('nextBtn');

  /* 
  Ogni volta che clicco sulla freccia si incrementa il ciclo che
  partendo dalla prima immagine (i=0) mi mette nella slide quell'immagine.
  Al click successivo si incrementa la variabile e quindi mette la seconda immagine */
for (let i = 0 ; i < album.length ; i++) {
  nextBtn.addEventListener('click', function() {
  slide.append(album[i])
})}




