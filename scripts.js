// Select required elements
const memeGallery = document.querySelector(".meme-gallery");
const prevBtn = document.querySelector(".nav-btn.prev-btn");
const nextBtn = document.querySelector(".nav-btn.next-btn");

let memeScrollPosition = 0; // Current scroll position
const memeCardWidth = 320 + 20; // Meme width + gap (20px)

// Scroll to the next memes
nextBtn.addEventListener("click", () => {
  const maxScrollLeft = memeGallery.scrollWidth - memeGallery.clientWidth;
  memeScrollPosition = Math.min(
    memeScrollPosition + memeCardWidth,
    maxScrollLeft
  );
  memeGallery.scrollTo({
    left: memeScrollPosition,
    behavior: "smooth",
  });
  updateButtonState();
});

// Scroll to the previous memes
prevBtn.addEventListener("click", () => {
  memeScrollPosition = Math.max(memeScrollPosition - memeCardWidth, 0);
  memeGallery.scrollTo({
    left: memeScrollPosition,
    behavior: "smooth",
  });
  updateButtonState();
});

// Update button states based on current scroll position
function updateButtonState() {
  const maxScrollLeft = memeGallery.scrollWidth - memeGallery.clientWidth;
  prevBtn.enable = memeScrollPosition <= 0;
  nextBtn.enable = memeScrollPosition >= maxScrollLeft;
}

// Add 'active' class to enlarge clicked meme
const memes = document.querySelectorAll(".meme-card");
memes.forEach((meme) => {
  meme.addEventListener("click", () => {
    memes.forEach((m) => m.classList.remove("active")); // Remove active class from all
    meme.classList.add("active"); // Add active class to the clicked meme
  });
});

// Initial setup for button state
updateButtonState();
