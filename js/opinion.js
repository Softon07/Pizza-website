const formBtn = document.querySelector('.form__btn');
const yourName = document.querySelector('#name');
const yourOpinion = document.querySelector('#testimonials');
const clientsList = document.querySelector(".opinion__clients-list");


const stars = document.querySelectorAll('.fa-star');
let numOfStars = 0;

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    numOfStars = index - 43;
    console.log(numOfStars);
    for (let i = 0; i < stars.length; i++) {
      if (i > index) {
        stars[i].classList.remove('highlight');
      } else {
        stars[i].classList.add('highlight');
      }
    }
  });
});






const addOpinion = () => {
  // Stworzenie kontenera dla opinii klienta i dodanie go do listy klientów
  const opinionContainer = document.createElement("div");
  opinionContainer.classList.add("opinion__client-rating");
  clientsList.appendChild(opinionContainer);

  // Stworzenie kontenera dla gwiazdek oceny
  const starsContainer = document.createElement("div");
  starsContainer.classList.add("opinion__stars");

  // Stworzenie elementów gwiazdki
  for (let i = 0; i < numOfStars; i++) {
    const starElement = document.createElement("i");
    starElement.classList.add("fa-solid");
    starElement.classList.add("fa-star");
    console.log(numOfStars);
    starsContainer.appendChild(starElement);
  }

  // Stworzenie kontenera dla komentarza
  const testimonialsContainer = document.createElement("div");
  testimonialsContainer.classList.add("opinion__testimonials");

  // Stworzenie elementu tekstowego komentarza
  const testimonialsText = document.createElement("p");
  testimonialsText.textContent = `${yourOpinion.value}`;
  testimonialsContainer.appendChild(testimonialsText);

  // Stworzenie linii separującej
  const lineElement = document.createElement("div");
  lineElement.classList.add("opinion__line");

  // Stworzenie kontenera dla autora komentarza
  const testimonialsAuthorContainer = document.createElement("div");
  testimonialsAuthorContainer.classList.add("opinion__testimonials-author");

  // Stworzenie elementu tekstowego autora komentarza
  const testimonialsAuthorText = document.createElement("p");
  testimonialsAuthorText.textContent = `${yourName.value}, 29 czerwca 2022`;
  testimonialsAuthorContainer.appendChild(testimonialsAuthorText);

  // Stworzenie kontenera dla adnotacji
  const annotationContainer = document.createElement("div");
  annotationContainer.classList.add("opinion__annotation");

  // Stworzenie elementu tekstowego zawartości adnotacji
  const annotationContent = document.createElement("p");
  annotationContent.classList.add("content");
  annotationContent.textContent = "Dziękujemy za opinię";

  // Stworzenie elementu tekstowego autora adnotacji
  const annotationAuthor = document.createElement("p");
  annotationAuthor.classList.add("author");
  annotationAuthor.textContent = "~ Zespół Pizzeriada";

  // Dodanie elementów tekstowych adnotacji do kontenera
  annotationContainer.appendChild(annotationContent);
  annotationContainer.appendChild(annotationAuthor);

  // Dodanie wszystkich stworzonych kontenerów i elementów do głównego kontenera
  opinionContainer.appendChild(starsContainer);
  opinionContainer.appendChild(testimonialsContainer);
  opinionContainer.appendChild(lineElement);
  opinionContainer.appendChild(testimonialsAuthorContainer);
  opinionContainer.appendChild(annotationContainer);

  yourName.value = "";
  yourOpinion.value = "";

}


formBtn.addEventListener('click', addOpinion);