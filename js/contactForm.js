const username = document.querySelector('#username');
const surname = document.querySelector('#surname');
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");
const textarea = document.querySelector("#text");

const popup = document.querySelector('.popup');
const sendBtn = document.querySelector('.form__btn-inside');
const closeBtn = document.querySelector('#closeBtn');


const showError = input => {
    const row = input.parentElement;
    row.classList.add('error');
}

const clearError = input => {
    const row = input.parentElement;
    row.classList.remove('error');
}

const checkErrors = () => {
    const allFormElements = document.querySelectorAll('.row');
    let errorCount = 0;

    allFormElements.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount++;
        }
    })

    if (errorCount === 0) {
        popup.classList.add('show-popup');
        cleanForm();
    }
}

const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el);
        } else {
            clearError(el)
        }
    })
}

const cleanForm = () => {
    [username, surname, select1, select2, select3, textarea].forEach(el => {
        el.value = '';
    })
}

sendBtn.addEventListener('click', e => {
    e.preventDefault();

    checkForm([username, surname, select1, select2, select3, textarea]);
    checkErrors();
});

closeBtn.addEventListener('click', e => {
    e.preventDefault();
    popup.classList.remove('show-popup');
});


// checkboxes
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const yesOrNo = document.querySelector('#yesOrNo');
const checkboxes = document.querySelectorAll('.form__contact-checkbox--container input');


checkboxes.forEach(el => {
    el.addEventListener('click', () => {
        if(el.checked && el.id === 'yesOrNo') {
            email.checked = false;
            phone.checked = false;
            console.log(el.checked, el.id);
        } else if (el.checked && el.id === 'phone') {
            console.log(el.checked, el.id);
            yesOrNo.checked = false;

        } else if (el.checked && el.id === 'email') {
            console.log(el.checked, el.id);
            yesOrNo.checked = false;
        }
    })
})