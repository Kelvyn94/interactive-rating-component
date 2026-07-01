(function () {
  "use strict";

  // --- DOM refs ---
  const ratingState = document.getElementById("ratingState");
  const thankYouState = document.getElementById("thankYouState");
  const ratingButtons = document.querySelectorAll(".rating-btn");
  const submitBtn = document.getElementById("submitBtn");
  const selectionBadge = document.getElementById("selectionBadge");

  let selectedRating = null; // will hold number (1-5) or null

  // --- Helper: update button states ---
  function updateSelectedButton(value) {
    ratingButtons.forEach((btn) => {
      const isSelected = Number(btn.dataset.value) === value;
      btn.classList.toggle("selected", isSelected);
      btn.setAttribute("aria-checked", isSelected ? "true" : "false");
    });
  }

  // --- Helper: enable/disable submit ---
  function updateSubmitButton() {
    submitBtn.disabled = selectedRating === null;
  }

  // --- Handler: rating button click ---
  function onRatingClick(e) {
    const btn = e.currentTarget;
    const value = Number(btn.dataset.value);

    // if same rating is clicked again, we keep it selected (no change)
    if (selectedRating === value) {
      return;
    }

    // update state
    selectedRating = value;
    updateSelectedButton(value);
    updateSubmitButton();
  }

  // --- Handler: submit ---
  function onSubmit() {
    if (selectedRating === null) {
      return; // should never happen because button is disabled
    }

    // 1. update badge text
    selectionBadge.textContent = `You selected ${selectedRating} out of 5`;

    // 2. swap states
    ratingState.classList.add("hidden");
    thankYouState.classList.remove("hidden");
  }

  // --- Attach events to rating buttons ---
  ratingButtons.forEach((btn) => {
    btn.addEventListener("click", onRatingClick);
  });

  // --- Attach submit ---
  submitBtn.addEventListener("click", onSubmit);

  // --- Initialize: no rating selected, submit disabled ---
  updateSubmitButton();

  console.log("Interactive rating component ready!");
})();
