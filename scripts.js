// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add "visible" class to video cards when they appear in the viewport
function handleScroll() {
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        if (isInViewport(card)) {
            card.classList.add('visible');
        }
    });
}

// Run the function on scroll
window.addEventListener('scroll', handleScroll);

// Initial check for already visible elements
document.addEventListener('DOMContentLoaded', handleScroll);


const videoContainer = document.querySelector('.video-container');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;
const totalVideos = document.querySelectorAll('.video-card').length;
const visibleVideos = 3; // ვიდეოების რაოდენობა, რომელიც ერთდროულად ჩანს

function updateSlidePosition() {
    const containerWidth = videoContainer.clientWidth;
    videoContainer.style.transform = `translateX(-${currentIndex * (100 / visibleVideos)}%)`;
}

// ავტომატური სქროლი
function autoScroll() {
    currentIndex++;
    if (currentIndex > totalVideos - visibleVideos) {
        currentIndex = 0;
    }
    updateSlidePosition();
}

// "Next" ღილაკი
nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > totalVideos - visibleVideos) {
        currentIndex = 0;
    }
    updateSlidePosition();
});

// "Prev" ღილაკი
prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalVideos - visibleVideos;
    }
    updateSlidePosition();
});

// ავტომატური სქროლის ინტერვალი
setInterval(autoScroll, 3000);


// ფუნქცია ტექსტის გამოჩენისთვის
function animateText() {
    const animatedTexts = document.querySelectorAll('.animated-text');

    animatedTexts.forEach((text) => {
        const textPosition = text.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (textPosition < screenPosition) {
            text.classList.add('fade-in');
        }
    });
}

// სქროლისას ტექსტების შემოწმება
window.addEventListener('scroll', animateText);

// საწყისად, თუ ტექსტები უკვე ხილვადია
document.addEventListener('DOMContentLoaded', animateText);


// ფუნქცია ბლოკების გამოჩენისთვის
function showNewsItems() {
    const newsItems = document.querySelectorAll('.news-item');

    newsItems.forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (itemPosition < screenHeight - 50) {
            item.classList.add('visible');
        }
    });
}

// მონიტორინგი სქროლისას
window.addEventListener('scroll', showNewsItems);

// საწყისად შემოწმება
document.addEventListener('DOMContentLoaded', showNewsItems);
