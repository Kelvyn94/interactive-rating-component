# Frontend Mentor - Interactive Rating Component Solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: ((https://github.com/Kelvyn94/interactive-rating-component))
- Live Site URL: [https://yourusername.github.io/interactive-rating-component](https://yourusername.github.io/interactive-rating-component)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- Accessible ARIA attributes

### What I learned

This project reinforced the importance of separating concerns with clean file structure:

**HTML Structure:**

```html
<!-- Clean semantic markup with clear state management -->
<section class="rating-state" id="ratingState">
  <!-- Rating interface -->
</section>
<section class="thank-you-state hidden" id="thankYouState">
  <!-- Thank you message -->
</section>
```

CSS Architecture:

```css
/* Organized by component with clear sections */
.rating-btn.selected {
  background: hsl(25, 97%, 53%);
  color: hsl(0, 100%, 100%);
}
```

JavaScript Logic:

```js
// Clean state management with helper functions
function updateSelectedButton(value) {
  ratingButtons.forEach((btn) => {
    const isSelected = Number(btn.dataset.value) === value;
    btn.classList.toggle("selected", isSelected);
    btn.setAttribute("aria-checked", isSelected ? "true" : "false");
  });
}
```
