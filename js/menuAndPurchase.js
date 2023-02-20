const sections = {
    Pizza: '.pizza',
    Sosy: '.sauce',
    Napoje: '.drinks'
};

const btns = document.querySelectorAll('.menu__list a');
const pizza = document.querySelector('.pizza');
const sauce = document.querySelector('.sauce');
const drinks = document.querySelector('.drinks');

// change section
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        for (const section in sections) {
            const el = document.querySelector(sections[section]);
            el.classList.toggle('not-visible', section !== btn.textContent);
        }
    });
});

const modalPizza = document.querySelector('.modal-pizza');
const modalSauce = document.querySelector('.modal-sauce');
const modalDrinks = document.querySelector('.modal-drinks');

const menuElement = document.querySelectorAll('.modal .el-name');
const closeModalBtn = document.querySelectorAll('#closeModalBtn');

const showModal = () => {
    if (!pizza.classList.contains('not-visible')) {
        modalPizza.classList.add('show-modal');
    } else if (!sauce.classList.contains('not-visible')) {
        modalSauce.classList.add('show-modal');
    } else if (!drinks.classList.contains('not-visible')) {
        modalDrinks.classList.add('show-modal');
    }
}

// pressed button
const elementsBtns = document.querySelectorAll('.element__btn');
elementsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        
        const nameElement = btn.closest('div').querySelector('p').textContent;
        console.log(nameElement);

        // dynamiczne nadanie nazwy na samej górze na modalu do przedmiotu który się kupuje.
        menuElement.forEach(el => {
            el.textContent = nameElement;
        });

        // show modal
        showModal();

    });
});

const closeModal = () => {
    modalPizza.classList.remove('show-modal');
    modalSauce.classList.remove('show-modal');
    modalDrinks.classList.remove('show-modal');
    console.log('wylaczono modal');
}

closeModalBtn.forEach(el => {
    el.addEventListener('click', () => {
        closeModal();
        cleanModal();
    });
});

const small = document.querySelector('#small');
const medium = document.querySelector('#medium');
const big = document.querySelector('#big');
const flat = document.querySelector('#flat');
const thick = document.querySelector('#thick');

const cleanModal = () => {
    [small, medium, big, flat, thick].forEach(el => {
        el.checked = false;
    });
}

const handleRadio = (el, small, medium, big, flat, thick) => {
    if (el.checked && el === small) {
        medium.checked = false;
        big.checked = false;
    } else if (el.checked && el === medium) {
        small.checked = false;
        big.checked = false;
    } else if (el.checked && el === big) {
        small.checked = false;
        medium.checked = false;
    }

    if (el.checked && el === flat) {
        thick.checked = false;
    } else if (el.checked && el === thick) {
        flat.checked = false;
    }
}

[small, medium, big, flat, thick].forEach(el => {
    el.addEventListener('click', () => {
        handleRadio(el, small, medium, big, flat, thick);
    });
});

// add item to shooping-cart
const addItemBtn = document.querySelectorAll('#addItemBtn');

addItemBtn.forEach(el => {
    el.addEventListener('click', () => {
        console.log('dodano do koszyka');
        closeModal();
        cleanModal();
        // addItemToCart();
    });
});