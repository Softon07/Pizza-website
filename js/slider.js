const slides = document.querySelector('.slider__slides');
firstImg = slides.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll('.slider__container .fa-solid');

const direction = "right";
let prevPageX, prevScrollLeft, positionDiff;
let dragStarted = false;
let isCurrentlyDragging = false;

const showHideIcon = () => {
    if (direction === "right" && slides.scrollLeft === 0) {
        arrowIcons[0].style.display = "none";
    } else {
        arrowIcons[0].style.display = "block";
    }

    if (direction === "left" && slides.scrollLeft === (slides.scrollWidth - slides.clientWidth)) {
        arrowIcons[1].style.display = "none";
    } else {
        arrowIcons[1].style.display = "block";
    }
}

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        let firstImgWidth = firstImg.clientWidth + 1.4;
        if (icon.id == "left") {
            slides.scrollLeft -= firstImgWidth;
        } else {
            slides.scrollLeft += firstImgWidth;
        }
        setTimeout(() => showHideIcon(), 60);
    });
});

const autoSlide = () => {
    if (direction === "right" && slides.scrollLeft === (slides.scrollWidth - slides.clientWidth)) {
        direction = "left";
    } else if (direction === "left" && slides.scrollLeft === 0) {
        direction = "right";
    }

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 1.4;
    let valDifference = firstImgWidth - positionDiff;

    if (direction === "right") {
        if (positionDiff > firstImgWidth / 3) {
            slides.scrollLeft += valDifference;
        } else {
            slides.scrollLeft -= positionDiff;
        }
    } else {
        if (positionDiff > firstImgWidth / 3) {
            slides.scrollLeft -= valDifference;
        } else {
            slides.scrollLeft += positionDiff;
        }
    }
}

setInterval(() => {
    if (slides.scrollLeft == (slides.scrollWidth - slides.clientWidth)) {
        slides.scrollLeft = 0;
    } else {
        let firstImgWidth = firstImg.clientWidth + 1.4;
        slides.scrollLeft += firstImgWidth;
    }
    showHideIcon();
}, 2000);

const dragStart = (e) => {
    dragStarted = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slides.scrollLeft;
}

const dragging = (e) => {
    if (!dragStarted) return
    e.preventDefault();
    isCurrentlyDragging = true;
    slides.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slides.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcon();
}

const dragStop = () => {
    dragStarted = false;
    slides.classList.remove("dragging");

    if (!isCurrentlyDragging) return;
    isCurrentlyDragging = false;
    autoSlide();
}

slides.addEventListener("mousedown", dragStart);
slides.addEventListener("touchstart", dragStart);

slides.addEventListener("mousemove", dragging);
slides.addEventListener("touchmove", dragging);

slides.addEventListener("mouseup", dragStop);
slides.addEventListener("mouseleave", dragStop);
slides.addEventListener("touchend", dragStop);