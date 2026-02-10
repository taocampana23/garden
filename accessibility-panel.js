// Accessibility Panel
const accessibilityToggle = document.getElementById('accessibility-toggle');
const accessibilityOptions = document.getElementById('accessibility-options');

if (accessibilityToggle && accessibilityOptions) {
    accessibilityToggle.addEventListener('click', () => {
        const isExpanded = accessibilityToggle.getAttribute('aria-expanded') === 'true';
        accessibilityToggle.setAttribute('aria-expanded', !isExpanded);
        accessibilityOptions.hidden = isExpanded;
    });
}

// High contrast toggle
const highContrastBtn = document.getElementById('high-contrast');
if (highContrastBtn) {
    highContrastBtn.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        highContrastBtn.classList.toggle('active');
    });
}

// Text size controls
const increaseTextBtn = document.getElementById('increase-text');
const decreaseTextBtn = document.getElementById('decrease-text');

if (increaseTextBtn && decreaseTextBtn) {
    increaseTextBtn.addEventListener('click', () => {
        document.body.classList.add('large-text');
    });
    
    decreaseTextBtn.addEventListener('click', () => {
        document.body.classList.remove('large-text');
    });
}

// Underline links
const underlineLinksBtn = document.getElementById('underline-links');
if (underlineLinksBtn) {
    underlineLinksBtn.addEventListener('click', () => {
        document.body.classList.toggle('underline-links');
        underlineLinksBtn.classList.toggle('active');
    });
}