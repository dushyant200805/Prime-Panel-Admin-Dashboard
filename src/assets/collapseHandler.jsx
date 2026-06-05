import { Collapse } from "bootstrap/dist/js/bootstrap.bundle.min";

// SINGLE TOGGLE
export const handleSingleToggle = (e) => {
  e.preventDefault();

  const button = e.currentTarget;

  const card = button.closest(".collapse-card");

  const collapseEl = card.querySelector(".collapse");

  if (!card || !collapseEl) return;

  // CARD HEIGHT
  card.classList.toggle("h-100");

  // ICON ROTATE
  button.classList.toggle("rotate-icon");

  // BOOTSTRAP INSTANCE
  const instance = Collapse.getOrCreateInstance(collapseEl, {
    toggle: false,
  });

  // OPEN / CLOSE
  if (collapseEl.classList.contains("show")) {
    instance.hide();
  } else {
    instance.show();
  }

  // TOGGLE BORDER ON H2
  const heading = card.querySelector("h2");
  if (heading) {
    heading.classList.toggle("border-bottom");
    heading.classList.toggle("light-border-bottom");
  }
};

// OPEN ALL ON PAGE LOAD
export const initializeCollapseCards = () => {
  const cards = document.querySelectorAll(".collapse-card");

  const collapsibles = document.querySelectorAll(".collapse-card .collapse");

  const buttons = document.querySelectorAll(".collapse-card .togglecard");

  cards.forEach((card) => {
    card.classList.add("h-100");
  });

  buttons.forEach((btn) => {
    btn.classList.add("rotate-icon");
  });

  collapsibles.forEach((el) => {
    const instance = Collapse.getOrCreateInstance(el, {
      toggle: false,
    });

    instance.show();
  });
};