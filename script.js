// ========================================
// OASIS ASSOCIATION WEBSITE - JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

// 1. Welcome message
console.log("Welcome to the Oasis Association website!");

// 2. Smooth appearance effect
const sections = document.querySelectorAll("main section");

sections.forEach(function (section) {
    section.style.transition = "opacity 0.5s ease";
    section.style.opacity = "1";
});

// 3. Form validation
const forms = document.querySelectorAll("form");

forms.forEach(function (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const nameField = form.querySelector('input[name="name"]');
        const emailField = form.querySelector('input[type="email"]');
        const subjectField = form.querySelector('input[name="subject"]');
        const messageField = form.querySelector('textarea[name="message"]');

        // Find the feedback area for the contact form
        const feedback = form.querySelector("#contactFeedback");

        // Clear previous feedback
        if (feedback) {
            feedback.textContent = "";
        }

        // Validate name
        if (nameField && nameField.value.trim() === "") {
            showMessage("Please enter your full name.", feedback);
            nameField.focus();
            return;
        }

        // Validate email
        if (emailField && !emailField.validity.valid) {
            showMessage("Please enter a valid email address.", feedback);
            emailField.focus();
            return;
        }

        // Validate subject if the field exists
        if (subjectField && subjectField.value.trim() === "") {
            showMessage("Please enter a subject for your message.", feedback);
            subjectField.focus();
            return;
        }

        // Validate message
        if (messageField && messageField.value.trim() === "") {
            showMessage("Please enter your message.", feedback);
            messageField.focus();
            return;
        }

        // Show successful validation message
        showMessage(
            "Thank you! Your form has passed validation. Please note that this demonstration form does not send your message yet.",
            feedback
        );

        form.reset();
    });

});

// Display messages on the page or use an alert if no feedback area exists
function showMessage(message, feedback) {
    if (feedback) {
        feedback.textContent = message;
    } else {
        alert(message);
    }
}

// 4. Search services and projects
const searchInput = document.getElementById("serviceSearch");
const serviceCards = document.querySelectorAll(".service-card");
const searchMessage = document.getElementById("searchMessage");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value.toLowerCase().trim();
        let visibleCards = 0;

        serviceCards.forEach(function (card) {

            const cardText = card.textContent.toLowerCase();

            if (cardText.includes(searchText)) {
                card.style.display = "";
                visibleCards++;
            } else {
                card.style.display = "none";
            }

        });

        if (searchMessage) {
            if (visibleCards === 0) {
                searchMessage.textContent =
                    "No matching services or projects found.";
            } else {
                searchMessage.textContent =
                    visibleCards + " result(s) found.";
            }
        }

    });

}

});