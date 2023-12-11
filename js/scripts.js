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
  }); */



// Creo l'array delle immagini

const images = [
  './img/01.webp' ,  // Posizione 1 --> Indice 0
  './img/02.webp' ,
  './img/03.webp' ,
  './img/04.webp' ,
  './img/05.webp'    // Posizione N --> Indice N - 1
];

console.log('images', images, images.length, typeof images);

const itemsContainer = document.querySelector('.items')

//Con il for possiamo accedere agli elementi dell'array

for (let i = 0 ; i < images.length ; i++ ) {
  // console.log ('Creo l\'elemento i-esimo dentro items', i);

  let itemActive = 'item';

  if (i == 0) {
    itemActive += ' active';
  }

  itemsContainer.innerHTML += `
      <div class="${itemActive}">
          <img src="${images[i]}" alt="">
      </div>`;
}

//MILESTONE 3

const prevBtn = document.querySelector('.prevBtn');
console.log('prevBtn' , prevBtn , typeof prevBtn);

const nextBtn = document.querySelector('.nextBtn');
console.log('nextBtn' , nextBtn , typeof nextBtn);

let allItems = document.querySelectorAll('.item');
console.log('allitems' , allItems , typeof allItems);

let imgAttiva = 0;

nextBtn.addEventListener('click', function(){
  if (imgAttiva < (allItems.length -1)) {

      //Tolgo la classe active dall'elemento attualmente visibile
    allItems[imgAttiva].classList.remove('active');

    // Incremento la variabile
    imgAttiva++ ;

    //Aggiungo la classe active all'elemento successivo
    allItems[imgAttiva].classList.add('active');  
  }
})

prevBtn.addEventListener('click', function(){
  if (imgAttiva > 0) {

      //Tolgo la classe active dall'elemento attualmente visibile
    allItems[imgAttiva].classList.remove('active');

    // Incremento la variabile
    imgAttiva-- ;

    //Aggiungo la classe active all'elemento successivo
    allItems[imgAttiva].classList.add('active'); 
  }
})


