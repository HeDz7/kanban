const cards = document.querySelectorAll(".kanban-card");

cards.forEach((card) => {
  card.addEventListener("dragstart", (e) => {
    e.currentTarget.classList.add("dragging");
  });

  card.addEventListener("dragend", (e) => {
    e.currentTarget.classList.remove("dragging");
  });
});

const columns = document.querySelectorAll(".kanban-cards");

columns.forEach((column) => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("cards-hover");
  });

  column.addEventListener("dragleave", (e) => {
    e.currentTarget.classList.remove("cards-hover");
  });

  column.addEventListener("drop", (e) => {
    e.currentTarget.classList.remove("cards-hover");

    const cardMove = document.querySelector(".dragging");
    column.appendChild(cardMove);
  });
});
