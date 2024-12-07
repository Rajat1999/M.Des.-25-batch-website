// Optional: Example of adding search functionality
// document.addEventListener('DOMContentLoaded', () => {
//     const searchInput = document.querySelector('#search');
//     const cards = document.querySelectorAll('.card');
  
//     searchInput.addEventListener('input', () => {
//       const query = searchInput.value.toLowerCase();
//       cards.forEach(card => {
//         const name = card.querySelector('h2').textContent.toLowerCase();
//         card.style.display = name.includes(query) ? '' : 'none';
//       });
//     });
//   });
  
  const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase();

  cards.forEach((card) => {
    const name = card.querySelector("h2").textContent.toLowerCase();
    const skills = card.querySelector("p").textContent.toLowerCase();

    // Check if the search value matches name or skills
    if (name.includes(searchValue) || skills.includes(searchValue)) {
      card.style.display = "block"; // Show card
    } else {
      card.style.display = "none"; // Hide card
    }
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   document.body.classList.add("loaded");
// });

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
  setTimeout(() => {
    document.getElementById("loading-spinner").style.display = "none";
  }, 500); /* Match the fade-out duration */
});

