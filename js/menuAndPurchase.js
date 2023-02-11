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

