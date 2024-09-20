document.getElementById('menu-toggle').addEventListener('click', function() {
  document.body.classList.toggle('nav-open');
});


document.addEventListener("DOMContentLoaded", function() {
  const texts = [
    "I am a Junior Web Developer.", 
    "I love to design..",
    "I build responsive websites.", 
    "I love working with clients", 
    "...to achieve their goals."
  ]; // Array of sentences to display
  let textIndex = 0; // Tracks the current sentence
  let charIndex = 0; // Tracks the current character in the sentence
  const speed = 100; // Typing speed in milliseconds
  const delayBetweenTexts = 1000; // Delay before starting the next sentence
  const typewriterElement = document.getElementById("typewriter-text");

  function typeWriter() {
    if (charIndex < texts[textIndex].length) {
      typewriterElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, speed); // Continue typing the current sentence
    } else {
      // Wait and then move to the next sentence
      setTimeout(() => {
        deleteText(); // Start deleting the current sentence
      }, delayBetweenTexts);
    }
  }

  function deleteText() {
    if (charIndex >= 0) {
      typewriterElement.textContent = texts[textIndex].substring(0, charIndex);
      charIndex--;
      setTimeout(deleteText, speed / 2); // Speed up deletion
    } else {
      // Move to the next text in the array
      textIndex = (textIndex + 1) % texts.length; // Loop back to the first sentence
      setTimeout(typeWriter, speed);
    }
  }

  // Start the typewriter effect
  typeWriter();
});
