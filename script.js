// script.js

// Smooth scroll for anchor links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Stream loading animation (optional enhancement)
  const streamFrame = document.querySelector("iframe.stream-player");
  const streamSection = document.querySelector(".stream-section");

  if (streamFrame && streamSection) {
    const loader = document.createElement("div");
    loader.innerText = "🔊 Connecting to Live Stream...";
    loader.style.cssText = `
      color: #00ff99;
      text-align: center;
      margin-bottom: 1rem;
      font-size: 1rem;
    `;
    streamSection.insertBefore(loader, streamFrame);

    streamFrame.addEventListener("load", () => {
      loader.remove();
    });
  }
});
