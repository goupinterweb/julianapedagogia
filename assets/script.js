
const $ = (selector) => document.querySelector(selector);

function applyPrefs(){
  const contrast = localStorage.getItem("contrast") === "true";
  const largeText = localStorage.getItem("largeText") === "true";
  document.body.classList.toggle("high-contrast", contrast);
  document.body.classList.toggle("large-text", largeText);
}

document.addEventListener("DOMContentLoaded", () => {
  applyPrefs();

  const contrastBtn = $("#contrastBtn");
  const textBtn = $("#textBtn");
  const searchInput = $("#searchInput");
  const cards = Array.from(document.querySelectorAll("[data-article-card]"));

  if(contrastBtn){
    contrastBtn.addEventListener("click", () => {
      localStorage.setItem("contrast", String(!(localStorage.getItem("contrast") === "true")));
      applyPrefs();
    });
  }

  if(textBtn){
    textBtn.addEventListener("click", () => {
      localStorage.setItem("largeText", String(!(localStorage.getItem("largeText") === "true")));
      applyPrefs();
    });
  }

  if(searchInput){
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.closest(".article-col").style.display = text.includes(q) ? "" : "none";
      });
    });
  }
});
