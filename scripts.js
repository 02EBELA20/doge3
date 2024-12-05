document.addEventListener("DOMContentLoaded", () => {
  // General Variables
  const videoContainer = document.querySelector(".video-container");
  const videoCards = document.querySelectorAll(".video-card");
  const videoPrevBtn = document.querySelector(".scroll-btn.prev");
  const videoNextBtn = document.querySelector(".scroll-btn.next");

  const memeContainer = document.querySelector(".meme-gallery");
  const memeCards = document.querySelectorAll(".meme-card");
  const memePrevBtn = document.querySelector(".nav-btn.prev-btn");
  const memeNextBtn = document.querySelector(".nav-btn.next-btn");

  let currentVideoIndex = 0;
  let currentMemeIndex = 0;
  let isVideoPausedByUser = false;

  // General Update Slider Function
  function updateSlider(cards, container, currentIndex) {
    cards.forEach((card, index) => {
      card.style.transform = `scale(0.8)`; // Smaller size
      card.style.opacity = `0.5`; // Dim effect
      card.style.zIndex = `0`;

      if (index === currentIndex) {
        card.style.transform = `scale(1)`; // Highlighted size
        card.style.opacity = `1`; // Full visibility
        card.style.zIndex = `10`;
      }

      const offset = index - currentIndex;
      card.style.transform += ` translateX(${offset * 120}%)`;
    });
  }

  // Video Slider Functions
  function goToPreviousVideo() {
    if (!isVideoPausedByUser) {
      currentVideoIndex = (currentVideoIndex - 1 + videoCards.length) % videoCards.length;
      updateSlider(videoCards, videoContainer, currentVideoIndex);
    }
  }

  function goToNextVideo() {
    if (!isVideoPausedByUser) {
      currentVideoIndex = (currentVideoIndex + 1) % videoCards.length;
      updateSlider(videoCards, videoContainer, currentVideoIndex);
    }
  }

  // Meme Slider Functions
  function goToPreviousMeme() {
    currentMemeIndex = (currentMemeIndex - 1 + memeCards.length) % memeCards.length;
    updateSlider(memeCards, memeContainer, currentMemeIndex);
  }

  function goToNextMeme() {
    currentMemeIndex = (currentMemeIndex + 1) % memeCards.length;
    updateSlider(memeCards, memeContainer, currentMemeIndex);
  }

  // Add hover effect for memes
  memeCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      memeCards.forEach((c) => c.classList.add("dimmed")); // Dim all memes
      card.classList.remove("dimmed"); // Highlight hovered meme
      card.classList.add("highlighted"); // Enlarge hovered meme
    });

    card.addEventListener("mouseout", () => {
      memeCards.forEach((c) => c.classList.remove("dimmed")); // Remove dim effect
      card.classList.remove("highlighted"); // Remove highlight
    });
  });

  // Video Navigation Buttons
  videoPrevBtn.addEventListener("click", goToPreviousVideo);
  videoNextBtn.addEventListener("click", goToNextVideo);

  // Meme Navigation Buttons
  memePrevBtn.addEventListener("click", goToPreviousMeme);
  memeNextBtn.addEventListener("click", goToNextMeme);

  // Add YouTube API for Video Control
  videoCards.forEach((card) => {
    const iframe = card.querySelector("iframe");
    const player = new YT.Player(iframe, {
      events: {
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.PLAYING) {
            isVideoPausedByUser = true; // Stop auto-scroll
          } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
            isVideoPausedByUser = false; // Resume auto-scroll
          }
        },
      },
    });
  });

  // Auto-Scroll Functionality
  setInterval(() => {
    if (!isVideoPausedByUser) {
      goToNextVideo();
    }
    goToNextMeme();
  }, 5000); // Change every 5 seconds

  // Initialize sliders
  updateSlider(videoCards, videoContainer, currentVideoIndex);
  updateSlider(memeCards, memeContainer, currentMemeIndex);
});




document.addEventListener("DOMContentLoaded", () => {
  const newsItems = document.querySelectorAll(".news-item");

  newsItems.forEach((item) => {
    // Hover Effect
    item.addEventListener("mouseover", () => {
      newsItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.add("dimmed"); // Add dimmed class to other items
        }
      });
      item.classList.add("highlighted"); // Highlight hovered item
    });

    item.addEventListener("mouseout", () => {
      newsItems.forEach((otherItem) => {
        otherItem.classList.remove("dimmed"); // Remove dimmed class
      });
      item.classList.remove("highlighted"); // Remove highlight
    });

    // Click Effect
    item.addEventListener("click", () => {
      newsItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.add("dimmed"); // Keep others dimmed
        }
      });
      item.classList.add("active"); // Add active class to clicked item
    });
  });
});
