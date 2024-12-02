// Select all FAQ items
const faqItems = document.querySelectorAll(".faq-item");

// Add event listeners to all FAQ questions
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector(".faq-icon");

  question.addEventListener("click", () => {
    // Collapse all open items
    faqItems.forEach((faq) => {
      const currentAnswer = faq.querySelector(".faq-answer");
      const currentIcon = faq.querySelector(".faq-icon");

      if (faq !== item) {
        currentAnswer.classList.remove("active");
        currentIcon.classList.remove("rotate");
      }
    });

    // Toggle the current item
    answer.classList.toggle("active");
    icon.classList.toggle("rotate");
  });
});
