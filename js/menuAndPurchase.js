const sections = {
    Pizza: '.pizza',
    Sosy: '.sauce',
    Napoje: '.drinks'
};

const btns = document.querySelectorAll('.menu__list a');

// change section
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        for (const section in sections) {
            const el = document.querySelector(sections[section]);
            el.classList.toggle('not-visible', section !== btn.textContent);
        }
    });
});

const modal = document.querySelector('.modal');
const pizzaNameElement = document.querySelector('.modal-item .pizza-name');
const closeModalBtn = document.querySelector('#closeModalBtn');

const showModal = () => {
    modal.classList.add('show-modal');
}

// pressed button
const pizzaBtns = document.querySelectorAll('.element__btn');
pizzaBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        // modal has: pizza's name
        const pizzaName = btn.closest('div').querySelector('p').textContent;
        console.log(pizzaName);

        pizzaNameElement.textContent = pizzaName;
        // show modal
        showModal();

    });
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal');
})


