const videoContainer = document.querySelector(".video-container");
const prevButton = document.querySelector(".scroll-btn.prev");
const nextButton = document.querySelector(".scroll-btn.next");
const videoCards = document.querySelectorAll(".video-card");

let currentIndex = 0; // საწყისი ინდექსი
const visibleVideos = 3; // ეკრანზე ხილვადი ვიდეოების რაოდენობა
const videoWidth = videoCards[0].clientWidth; // თითო ვიდეოს სიგანე

// განახლება: ვიდეოების პოზიციის მართვა
function updateSlidePosition() {
  const translateX = -(currentIndex * videoWidth);
  videoContainer.style.transform = `translateX(${translateX}px)`;
}

// "Next" ღილაკი
nextButton.addEventListener("click", () => {
  if (currentIndex < videoCards.length - visibleVideos) {
    currentIndex++;
    updateSlidePosition();
  }
});

// "Prev" ღილაკი
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
});

// ფანჯრის ზომის ცვლილებაზე ავტომატური პოზიციის განახლება
window.addEventListener("resize", () => {
  updateSlidePosition();
});

// საწყისი პოზიციის დაყენება
document.addEventListener("DOMContentLoaded", updateSlidePosition);
