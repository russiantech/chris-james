/* ============================================
   CONTACT FORM VALIDATION
   COS 106 - Introduction to Web Technologies
   Miva Open University
   Validates: Empty fields, Email regex, Phone digits only
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
});

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (!contactForm) return;

    // Field configuration with validation rules
    const fields = {
        name: {
            el: document.getElementById('contactName'),
            error: document.getElementById('nameError'),
            validate: function(val) {
                return val.trim().length > 0;
            }
        },
        email: {
            el: document.getElementById('contactEmail'),
            error: document.getElementById('emailError'),
            validate: function(val) {
                // Email regex: standard format validation
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
            }
        },
        phone: {
            el: document.getElementById('contactPhone'),
            error: document.getElementById('phoneError'),
            validate: function(val) {
                // Phone validation: digits only, minimum 7 characters
                return /^\d+$/.test(val.trim()) && val.trim().length >= 7;
            }
        },
        message: {
            el: document.getElementById('contactMessage'),
            error: document.getElementById('messageError'),
            validate: function(val) {
                return val.trim().length > 0;
            }
        }
    };

    // Real-time validation on blur (field loses focus)
    Object.keys(fields).forEach(function(key) {
        const field = fields[key];
        if (field.el) {
            field.el.addEventListener('blur', function() {
                validateField(key, fields);
            });

            // Clear error on input
            field.el.addEventListener('input', function() {
                clearError(key, fields);
            });
        }
    });

    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;

        // Validate all fields
        Object.keys(fields).forEach(function(key) {
            if (!validateField(key, fields)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Collect form data
            const formData = {
                name: fields.name.el.value.trim(),
                email: fields.email.el.value.trim(),
                phone: fields.phone.el.value.trim(),
                subject: document.getElementById('contactSubject') ? document.getElementById('contactSubject').value : 'general',
                message: fields.message.el.value.trim(),
                timestamp: new Date().toISOString()
            };

            // Store submission (simulating server storage)
            const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            submissions.push(formData);
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

            // Show success state
            contactForm.style.display = 'none';
            if (formSuccess) {
                formSuccess.classList.add('active');
            }

            console.log('Contact form submitted:', formData);
        }
    });
}

// Validate individual field
function validateField(key, fields) {
    const field = fields[key];
    const value = field.el.value;
    const isValid = field.validate(value);

    if (!isValid) {
        field.error.classList.add('show');
        field.el.style.borderColor = 'var(--danger)';
        return false;
    } else {
        clearError(key, fields);
        return true;
    }
}

// Clear error state for a field
function clearError(key, fields) {
    const field = fields[key];
    field.error.classList.remove('show');
    field.el.style.borderColor = '';
}
