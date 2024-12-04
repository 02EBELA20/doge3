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

document.querySelectorAll(".news-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    document.querySelectorAll(".news-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.add("dimmed");
      }
    });
  });

  item.addEventListener("mouseleave", () => {
    document.querySelectorAll(".news-item").forEach((otherItem) => {
      otherItem.classList.remove("dimmed");
    });
  });
});

document.querySelectorAll(".video-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("highlight");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("highlight");
  });
});

const videos = document.querySelectorAll("iframe");

videos.forEach((video) => {
  video.addEventListener("play", () => {
    videos.forEach((otherVideo) => {
      if (otherVideo !== video) {
        otherVideo.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    });
  });
});

// JavaScript კოდი ჰედერის ანიმაციისთვის
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  // ანიმაციის ფერები
  const colors = ["#4caf50", "#2e7d32", "#81c784", "#388e3c", "#66bb6a"];
  let colorIndex = 0;

  // ანიმაციის ფუნქცია
  function animateBackground() {
    header.style.background = `linear-gradient(45deg, ${colors[colorIndex]}, ${
      colors[(colorIndex + 1) % colors.length]
    })`;
    header.style.backgroundSize = "200% 200%";
    header.style.animation = "backgroundAnimation 6s infinite";

    colorIndex = (colorIndex + 1) % colors.length;
  }

  // ანიმაციის კოდი დამატებული CSS-ში
  const style = document.createElement("style");
  style.innerHTML = `
      @keyframes backgroundAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
      }
  `;
  document.head.appendChild(style);

  // ჰედერის დაწყება
  animateBackground();

  // დროის ინტერვალზე ფერების ცვლილება
  setInterval(animateBackground, 6000);
});
