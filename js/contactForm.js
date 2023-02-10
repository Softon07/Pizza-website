const username = document.querySelector('#username');
const surname = document.querySelector('#surname');
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");
const textarea = document.querySelector("#text");

const newEmailInput = document.querySelector('#newPhone');
const newPhoneInput = document.querySelector('#newEmail');

const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const yesOrNo = document.querySelector('#yesOrNo');
const checkboxes = document.querySelectorAll('.form__contact-checkbox--container input');
const newPhoneContainer = document.querySelector('.new-phone');
const newEmailContainer = document.querySelector('.new-email');

const popup = document.querySelector('.popup');
const sendBtn = document.querySelector('.form__btn-inside');
const closeBtn = document.querySelector('#closeBtn');

const showError = input => {
    const parent = input.parentElement;
    parent.classList.add('error');
}

const clearError = input => {
    const parent = input.parentElement;
    parent.classList.remove('error');
}

const checkErrors = () => {
    const allInputs = document.querySelectorAll('.row');
    const allCheckBoxes = document.querySelectorAll('.new-el');
    let errorCount = 0;

    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount++;
        }
    })

    allCheckBoxes.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount++;
        }
    })

    if (errorCount === 0) {
        popup.classList.add('show-popup');
        cleanForm();
        if (popup.classList.contains('show-popup')) {
            setTimeout(() => {
                popup.classList.remove('show-popup');
            }, 3500);
        }
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

const checkContactData = ([newEmail, newPhone]) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^\d{9,15}$/;

    if (phone.checked && !phoneRegex.test(newPhone.value)) {
        showError(newPhone);
    } else {
        clearError(newPhone)
    }

    if (email.checked && !emailRegex.test(newEmail.value)) {
        showError(newEmail);
    } else {
        clearError(newEmail)
    }
}

checkboxes.forEach(el => {
    el.addEventListener('click', () => {
        if (el.checked && el.id === 'yesOrNo') {
            email.checked = false;
            phone.checked = false;
            newPhoneContainer.classList.remove('show-container');
            newEmailContainer.classList.remove('show-container');
        } else if (el.checked && el.id === 'phone') {
            yesOrNo.checked = false;
            newPhoneContainer.classList.toggle('show-container');
        } else if (el.checked && el.id === 'email') {
            yesOrNo.checked = false;
            newEmailContainer.classList.toggle('show-container');
        }
        if (!el.checked && el.id === 'phone') {
            newPhoneContainer.classList.remove('show-container');
        } else if (!el.checked && el.id === 'email') {
            newEmailContainer.classList.remove('show-container');
        }
    });
});

const cleanForm = () => {
    [username, surname, select1, select2, select3, textarea, newPhone, newEmail].forEach(el => {
        el.value = '';
    })
}

sendBtn.addEventListener('click', e => {
    e.preventDefault();
    checkForm([username, surname, select1, select2, select3, textarea]);
    checkContactData([newEmail, newPhone]);
    checkErrors();
});

closeBtn.addEventListener('click', e => {
    e.preventDefault();
    popup.classList.remove('show-popup');
});