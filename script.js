// ========================================
// OASIS ASSOCIATION WEBSITE - JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // 1. Add a welcome message to the browser console
    console.log("Welcome to the Oasis Association website!");

    // 2. Add a smooth appearance effect to page sections
    const sections = document.querySelectorAll("main section");

    sections.forEach(function (section) {
        section.style.transition = "opacity 0.5s ease";
        section.style.opacity = "1";
    });

    // 3. Validate enquiry and contact forms
    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {

        form.addEventListener("submit", function (event) {

            const nameField = form.querySelector(
                'input[name="name"]'
            );

            const emailField = form.querySelector(
                'input[type="email"]'
            );

            const messageField = form.querySelector(
                'textarea[name="message"]'
            );

            // Check that the name is not empty
            if (nameField && nameField.value.trim() === "") {
                event.preventDefault();
                alert("Please enter your full name.");
                nameField.focus();
                return;
            }

            // Check that the email address is valid
            if (emailField && !emailField.validity.valid) {
                event.preventDefault();
                alert("Please enter a valid email address.");
                emailField.focus();
                return;
            }

            // Check that the message is not empty
            if (messageField && messageField.value.trim() === "") {
                event.preventDefault();
                alert("Please enter your message.");
                messageField.focus();
                return;
            }

            // Prevent submission until a real submission method is configured
            event.preventDefault();

            alert(
                "Thank you! Your information has passed validation. " +
                "Please note that this demonstration form does not send your message yet."
            );

        });

    });
// ========================================
    // SEARCH SERVICES AND PROJECTS
    // ========================================

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