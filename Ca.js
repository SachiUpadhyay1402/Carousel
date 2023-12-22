document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
    const menu = document.getElementById('menu');
    const moreSection = document.getElementById('moreSection');

    // Function to move items to the "More" section based on screen size
    function handleResponsiveLayout() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            // Move items from menu to moreSection
            const menuItems = menu.querySelectorAll('.menu-item');
            menuItems.forEach((item, index) => {
                if (index > 2) {
                    moreSection.appendChild(item.cloneNode(true));
                    item.style.display = 'none';
                }
            });
            moreSection.style.display = 'flex';
        } else {
            // Reintegrate items from moreSection to menu
            const moreItems = moreSection.querySelectorAll('.menu-item');
            moreItems.forEach((item) => {
                menu.appendChild(item.cloneNode(true));
            });
            moreSection.style.display = 'none';
        }
    }

    // Call the function on page load and resize
    handleResponsiveLayout();
    window.addEventListener('resize', handleResponsiveLayout);
});