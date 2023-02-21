const sections = {
    Pizza: '.pizza',
    Sosy: '.sauce',
    Napoje: '.drinks'
};

const btns = document.querySelectorAll('.menu__list a');
const pizza = document.querySelector('.pizza');
const sauce = document.querySelector('.sauce');
const drinks = document.querySelector('.drinks');

const modalOverlay = document.querySelector('.modal-overlay');

let productsCounter = document.querySelector('.shopping-cart .counter');
productsCounter.textContent = 0;

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
const modalDrinks = document.querySelector('.modal-cart');
const modalCart = document.querySelector('.modal-cart');

const menuElement = document.querySelectorAll('.modal .el-name');
const pizzaIngredients = document.querySelectorAll('.pizza-ingredients .ingredients');
const closeModalBtn = document.querySelectorAll('#closeModalBtn');

const showModal = () => {
    if (!pizza.classList.contains('not-visible')) {
        modalPizza.classList.add('show-modal');
    } else if (!sauce.classList.contains('not-visible')) {
        modalSauce.classList.add('show-modal');
    } else if (!drinks.classList.contains('not-visible')) {
        modalDrinks.classList.add('show-modal');
    }
    modalOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

let pizzaName, pizzaComponents, price;

// pressed button
const elementsBtns = document.querySelectorAll('.element__btn');
elementsBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        // const pizzaSize = ;

        const nameElement = btn.closest('div').querySelector('p').textContent;
        // dynamiczne nadanie nazwy na samej górze na modalu do przedmiotu który się kupuje.
        menuElement.forEach(el => {
            el.textContent = nameElement;
            pizzaName = nameElement;
        });

        // only for pizza category
        try {
            const componentsElement = btn.closest('.pizza__list').querySelector('.pizza__components p');
            const components = componentsElement.textContent;
            pizzaIngredients.forEach(el => {
                el.textContent = components;
                pizzaComponents = components;
            });
        } catch (error) {
            console.error('Product outside the pizza category!');
        }
        showModal();
    });
});



const closeModal = () => {
    modalPizza.classList.remove('show-modal');
    modalSauce.classList.remove('show-modal');
    modalDrinks.classList.remove('show-modal');
    modalCart.classList.remove('show-modal');
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeModalBtn.forEach(el => {
    el.addEventListener('click', () => {
        closeModal();
        cleanModal();
    });
});

// pizza inputs
const smallPizza = document.querySelector('#small-pizza');
const mediumPizza = document.querySelector('#medium-pizza');
const bigPizza = document.querySelector('#big-pizza');
const flat = document.querySelector('#flat');
const thick = document.querySelector('#thick');

// sauce inputs
const smallSauce = document.querySelector('#small-sauce');
const mediumSauce = document.querySelector('#medium-sauce');


// drinks inputs
const smallDrinks = document.querySelector('#small-drinks');
const mediumDrinks = document.querySelector('#medium-drinks');
const bigDrinks = document.querySelector('#big-drinks');

const cleanModal = () => {
    [smallPizza, mediumPizza, bigPizza, flat, thick, smallSauce, mediumSauce, smallDrinks, mediumDrinks, bigDrinks].forEach(el => {
        el.checked = false;
    });
}

const handleRadio = (el, smallPizza, mediumPizza, bigPizza, flat, thick, smallSauce, mediumSauce, smallDrinks, mediumDrinks, bigDrinks) => {
    if (el.checked && el === smallPizza) {
        mediumPizza.checked = false;
        bigPizza.checked = false;
    } else if (el.checked && el === mediumPizza) {
        smallPizza.checked = false;
        bigPizza.checked = false;
    } else if (el.checked && el === bigPizza) {
        smallPizza.checked = false;
        mediumPizza.checked = false;
    }

    if (el.checked && el === flat) {
        thick.checked = false;
    } else if (el.checked && el === thick) {
        flat.checked = false;
    }

    if (el.checked && el === smallSauce) {
        mediumSauce.checked = false;
    } else if (el.checked && el === mediumSauce) {
        smallSauce.checked = false;
    }

    if (el.checked && el === smallDrinks) {
        mediumDrinks.checked = false;
        bigDrinks.checked = false;
    } else if (el.checked && el === mediumDrinks) {
        smallDrinks.checked = false;
        bigDrinks.checked = false;
    } else if (el.checked && el === bigDrinks) {
        smallDrinks.checked = false;
        mediumDrinks.checked = false;
    }
}

[smallPizza, mediumPizza, bigPizza, flat, thick, smallSauce, mediumSauce, smallDrinks, mediumDrinks, bigDrinks].forEach(el => {
    el.addEventListener('click', () => {
        handleRadio(el, smallPizza, mediumPizza, bigPizza, flat, thick, smallSauce, mediumSauce, smallDrinks, mediumDrinks, bigDrinks);
    });
});

const emptyCart = document.querySelector('.cart-empty');

const showCartModal = () => {
    modalCart.classList.add('show-modal');
    modalOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';

    if (productsCounter.textContent > 0) {
        emptyCart.style.display = "none";
        console.log(productsCounter.textContent);
    } else {
        emptyCart.style.display = "block";
        console.log(productsCounter.textContent);
    }

}


const addItemToCart = (pizzaName, pizzaComponents) => {
    productsCounter.textContent++;

    const productList = document.querySelector('.products-list');
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    const productName = document.createElement('p');
    productName.classList.add('product-name');
    
    productName.textContent = pizzaName;
    
    const productDetails = document.createElement('p');
    productDetails.classList.add('product-details');
    productDetails.textContent = pizzaComponents;
    
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('line');
    
    productDiv.appendChild(productName);
    productDiv.appendChild(productDetails);
    productDiv.appendChild(lineDiv);
    
    productList.appendChild(productDiv);

}

// add item to shooping-cart
const addItemBtn = document.querySelectorAll('#addItemBtn');

addItemBtn.forEach(el => {
    el.addEventListener('click', () => {
        closeModal();
        cleanModal();
        addItemToCart(pizzaName, pizzaComponents);
    });
});

// clicking outside the modal disables the modal
document.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});


// show CardModal

const cardBtn = document.querySelector('.shopping-cart');

cardBtn.addEventListener('click', () => {
    showCartModal();
});