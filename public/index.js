const DESIGN_WIDTH = 1920;
const container = document.querySelector('.design-container');

function setScale() {
    const screenWidth = window.innerWidth;
    const scale = screenWidth / DESIGN_WIDTH;
    container.style.transform = `scale(${scale})`;
    container.style.transformOrigin = 'left top';
    container.style.marginLeft = `${(screenWidth - DESIGN_WIDTH * scale) / 2}px`;
}

setScale();

window.addEventListener('resize', setScale);

function debounce(fn, delay = 100) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, delay);
    };
}

function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const returnTopBtn = document.querySelector('.returnTop');

    scrollTop > 600 ? returnTopBtn.classList.add('show') : returnTopBtn.classList.remove('show');
}

const debouncedScroll = debounce(handleScroll, 100);

window.addEventListener('scroll', debouncedScroll);

window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', debouncedScroll);
});