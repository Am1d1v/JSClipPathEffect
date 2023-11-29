

const circleOne = document.querySelector('.circle-one')
const circleTwo = document.querySelector('.circle-two')

// Event Listeners
window.addEventListener('scroll', () => {
    // Difference between the scroll bar and the window
    let scroll = window.scrollY;

    // Dynamic style for circles
    circleOne.style.clipPath = `circle(${(150 + scroll) * 0.9}px at 0 0)`
    circleTwo.style.clipPath = `circle(${(150 + scroll) * 0.9}px at 100% 100%)`
});