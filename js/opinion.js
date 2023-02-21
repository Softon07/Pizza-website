const formBtn = document.querySelector('.form__btn');
const yourName = document.querySelector('#name');
const yourOpinion = document.querySelector('#testimonials');
const clientsList = document.querySelector(".opinion__clients-list");
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date().toLocaleDateString('pl-PL', options);
const stars = document.querySelectorAll('.fa-star');
let numOfStars = 5;

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    numOfStars = index - 43;
    for (let i = 0; i < stars.length; i++) {
      if (i > index) {
        stars[i].classList.remove('highlight');
      } else {
        stars[i].classList.add('highlight');
      }
    }
  });
});

const removeStars = () => {
  stars.forEach(star => star.classList.remove('highlight'));
};

const main = () => {
  const opinionContainer = document.createElement("div");
  opinionContainer.classList.add("opinion__client-rating");
  clientsList.appendChild(opinionContainer);

  const starsContainer = document.createElement("div");
  starsContainer.classList.add("opinion__stars");

  for (let i = 0; i < numOfStars; i++) {
    const starElement = document.createElement("i");
    starElement.classList.add("fa-solid");
    starElement.classList.add("fa-star");
    starsContainer.appendChild(starElement);
  }

  const testimonialsContainer = document.createElement("div");
  testimonialsContainer.classList.add("opinion__testimonials");

  const testimonialsText = document.createElement("p");
  testimonialsText.textContent = `${yourOpinion.value}`;
  testimonialsContainer.appendChild(testimonialsText);

  const lineElement = document.createElement("div");
  lineElement.classList.add("opinion__line");

  const testimonialsAuthorContainer = document.createElement("div");
  testimonialsAuthorContainer.classList.add("opinion__testimonials-author");

  const testimonialsAuthorText = document.createElement("p");
  yourName.value = yourName.value || 'Gość';
  testimonialsAuthorText.textContent = `${yourName.value}, ${today}`;
  testimonialsAuthorContainer.appendChild(testimonialsAuthorText);

  const annotationContainer = document.createElement("div");
  annotationContainer.classList.add("opinion__annotation");

  const annotationContent = document.createElement("p");
  annotationContainer.appendChild(annotationContent);
  annotationContent.classList.add("content");
  annotationContent.textContent = "Dziękujemy za opinię";

  const annotationAuthor = document.createElement("p");
  annotationContainer.appendChild(annotationAuthor);
  annotationAuthor.classList.add("author");
  annotationAuthor.textContent = "~ Zespół Pizzeriada";

  opinionContainer.appendChild(starsContainer);
  opinionContainer.appendChild(testimonialsContainer);
  opinionContainer.appendChild(lineElement);
  opinionContainer.appendChild(testimonialsAuthorContainer);
  opinionContainer.appendChild(annotationContainer);

  yourName.value = "";
  yourOpinion.value = "";
  removeStars();
}

formBtn.addEventListener('click', main);