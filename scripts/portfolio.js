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

  // Start counters when visible
  elements.forEach(({ id, start, end, duration }) => {
    startCounterWhenVisible(id, start, end, duration);
  });

  // Intersection observer for skills
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate circular progress
        document.querySelectorAll('.progress-circle').forEach(circle => {
          const value = circle.getAttribute('data-value');
          const progressValue = circle.querySelector('.progress-circle-value');
          progressValue.style.transform = `rotate(${value * 3.6}deg)`;
        });

        // Animate numbers
        animateNumbers();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(document.querySelector('.skills'));
});

let elements = [
  { id: "#skillOne", start: 0, end: 95, duration: 4000 },
  { id: "#skillTwo", start: 0, end: 93, duration: 4000 },
  { id: "#skillThree", start: 0, end: 87, duration: 4000 },
  { id: "#skillFour", start: 0, end: 85, duration: 4000 },
  { id: "#skillFive", start: 0, end: 75, duration: 4000 },
  { id: "#skillSix", start: 0, end: 60, duration: 4000 },
];

function animateValue(id, start, end, duration) {
  let obj = document.querySelector(id);
  let startTimestamp = null;
  function step(timestamp) {
    if (startTimestamp === null) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

function startCounterWhenVisible(id, start, end, duration) {
  const target = document.querySelector(id);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValue(id, start, end, duration);
        }
      });
    },
    { threshold: 0.5 }
  );
  observer.observe(target);
}

function animateNumbers() {
    const skillNumbers = {
        skillOne: 96,
        skillTwo: 90,
        skillThree: 87,
        skillFour: 85,
        skillFive: 65
    };

    Object.entries(skillNumbers).forEach(([id, target]) => {
        const element = document.getElementById(id);
        let current = 0;
        const increment = target / 60;
        
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }
            element.textContent = Math.round(current);
        }, 16);
    });
}