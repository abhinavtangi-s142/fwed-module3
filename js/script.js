  // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Simple form validation and feedback
        const form = document.getElementById('contactForm');
        const feedback = document.getElementById('formFeedback');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            feedback.textContent = '';

            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            if (name.length < 2) {
                feedback.textContent = 'Please enter a valid name.';
                return;
            }
            if (!email.includes('@')) {
                feedback.textContent = 'Please enter a valid email address.';
                return;
            }
            if (message.length < 10) {
                feedback.textContent = 'Message should be at least 10 characters long.';
                return;
            }

            feedback.style.color = 'green';
            feedback.textContent = 'Thank you for your message! I will get back to you soon.';
            form.reset();
        });