document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.poppy-logo-banner');

    if (banner) {
        // Measure the full scrollable width of the banner (Set A + Set B)
        const fullBannerWidth = banner.scrollWidth;

        // The target translation is half of the full banner width (i.e., width of Set A)
        // We'll make it negative for leftward movement
        const translationDistance = -fullBannerWidth / 2;

        // Apply this as a CSS custom property (variable)
        // This will be accessible in your CSS as var(--poppy-translate-x)
        banner.style.setProperty('--poppy-translate-x', `${translationDistance}px`);

        // Optional: Add a small pixel adjustment for sub-pixel rendering if still flickering
        // banner.style.setProperty('--poppy-translate-x', `calc(${translationDistance}px - 0.5px)`);
    }
});
