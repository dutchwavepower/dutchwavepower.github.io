document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.poppy-logo-banner');

    if (banner) {
        // --- Debugging Logs Start ---
        console.log('--- Poppy Banner Debug ---');
        console.log('1. banner element found:', banner);
        console.log('2. banner.scrollWidth (total width of [Set A][Set B]):', banner.scrollWidth);
        // --- Debugging Logs End ---

        // Measure the full scrollable width of the banner (Set A + Set B)
        const fullBannerWidth = banner.scrollWidth;

        // The target translation is half of the full banner width (i.e., width of Set A)
        // We'll make it negative for leftward movement
        const translationDistance = -fullBannerWidth / 2;

        // --- Debugging Logs Start ---
        console.log('3. Calculated translationDistance (should be -width of Set A):', translationDistance);
        // --- Debugging Logs End ---

        // Apply this as a CSS custom property (variable)
        // This will be accessible in your CSS as var(--poppy-translate-x)
        banner.style.setProperty('--poppy-translate-x', `${translationDistance}px`);

        // --- Debugging Logs Start ---
        console.log('4. CSS variable --poppy-translate-x set to:', banner.style.getPropertyValue('--poppy-translate-x'));
        console.log('--- End Poppy Banner Debug ---');
        // --- Debugging Logs End ---

        // Keep your optional sub-pixel adjustment here if you have it
        // transform: translateX(calc(var(--poppy-translate-x) - 0.1px));
    }
});
