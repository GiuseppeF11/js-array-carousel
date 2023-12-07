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

