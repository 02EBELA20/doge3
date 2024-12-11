// Burger menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burgerMenu'); // ბურგერის ღილაკი
  const mobileMenu = document.getElementById('mobileMenu'); // მობილური მენიუ

  // ბურგერის ღილაკის დაჭერის ფუნქცია
  burgerMenu.addEventListener('click', () => {
    if (mobileMenu.style.display === 'flex') {
      mobileMenu.style.display = 'none'; // მენიუს დამალვა
    } else {
      mobileMenu.style.display = 'flex'; // მენიუს ჩვენება
      mobileMenu.style.flexDirection = 'column'; // ვერტიკალური განლაგება
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const videoItems = document.querySelectorAll(".video-item");

  videoItems.forEach((videoItem) => {
    const video = videoItem.querySelector("iframe");
    const text = videoItem.querySelector("p");

    videoItem.addEventListener("mouseenter", () => {
      // Zoom the hovered video and show the text
      video.style.transform = "scale(1.1)";
      video.style.transition = "transform 0.3s ease-in-out";
      text.style.opacity = "1";
      text.style.transform = "translateY(0)";
      text.style.transition = "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";

      // Pause and dim other videos
      videoItems.forEach((otherItem) => {
        if (otherItem !== videoItem) {
          const otherVideo = otherItem.querySelector("iframe");
          otherVideo.style.filter = "brightness(0.5)";
          otherVideo.style.transition = "filter 0.3s ease-in-out";

          // Pause the other video by reloading its source
          const iframeSrc = otherVideo.src;
          otherVideo.src = iframeSrc;
        }
      });
    });

    videoItem.addEventListener("mouseleave", () => {
      // Reset the hovered video and text
      video.style.transform = "scale(1)";
      text.style.opacity = "0";
      text.style.transform = "translateY(10px)";

      // Reset other videos
      videoItems.forEach((otherItem) => {
        const otherVideo = otherItem.querySelector("iframe");
        otherVideo.style.filter = "brightness(1)";
      });
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // Image hover effect for memes
  const memeItems = document.querySelectorAll(".meme-item");

  memeItems.forEach((memeItem) => {
    const memeImage = memeItem.querySelector("img");

    memeItem.addEventListener("mouseenter", () => {
      memeImage.style.transform = "scale(1.1) rotate(3deg)";
      memeImage.style.transition = "transform 0.3s ease-in-out";
    });

    memeItem.addEventListener("mouseleave", () => {
      memeImage.style.transform = "scale(1) rotate(0)";
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // Select all image items
  const imageItems = document.querySelectorAll(".image-item");
  const fullscreenOverlay = document.querySelector(".fullscreen-overlay");
  const fullscreenImage = document.createElement("img");
  const fullscreenText = document.createElement("p");
  const closeFullscreen = document.querySelector(".fullscreen-close");

  // Append image and text to fullscreen overlay
  fullscreenOverlay.appendChild(fullscreenImage);
  fullscreenOverlay.appendChild(fullscreenText);

  // Add click event for each image
  imageItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const text = item.querySelector("p");
      fullscreenImage.src = img.src;
      fullscreenText.textContent = text.textContent;

      fullscreenOverlay.classList.add("active");
    });
  });

  // Close fullscreen on click
  closeFullscreen.addEventListener("click", () => {
    fullscreenOverlay.classList.remove("active");
  });

  // Close fullscreen on overlay click
  fullscreenOverlay.addEventListener("click", (e) => {
    if (e.target === fullscreenOverlay) {
      fullscreenOverlay.classList.remove("active");
    }
  });
});


// Add fullscreen functionality for memes
document.querySelectorAll('.meme-item img').forEach((img) => {
  img.addEventListener('click', () => {
    const overlay = document.querySelector('.fullscreen-overlay');
    const closeButton = document.querySelector('.fullscreen-close');

    // Clear previous content in overlay
    overlay.innerHTML = `
      <button class="fullscreen-close">&times;</button>
      <img src="${img.src}" alt="Fullscreen Meme" class="fullscreen-content">
    `;

    // Show overlay
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';

    // Close overlay functionality
    document.querySelector('.fullscreen-close').addEventListener('click', () => {
      overlay.style.visibility = 'hidden';
      overlay.style.opacity = '0';
    });
  });
});


// FAQ Section functionality
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;

      // თუ პასუხი უკვე ჩანს, დავხუროთ
      if (answer.style.display === "block") {
        answer.style.display = "none";
        button.parentElement.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)"; // ვიზუალური ეფექტი
      } else {
        // ყველა პასუხის დამალვა, რათა ერთდროულად მხოლოდ ერთი გამოჩნდეს
        document.querySelectorAll(".faq-answer").forEach((otherAnswer) => {
          otherAnswer.style.display = "none";
        });

        // ამ კითხვაზე პასუხის ჩვენება
        answer.style.display = "block";
        button.parentElement.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)"; // ეფექტი
      }
    });
  });
});
