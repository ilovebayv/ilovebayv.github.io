function toggleDesc(element) {
    const parentItem = element.closest('.expertise-item');
    if (!parentItem) return;

    const desc = parentItem.querySelector('.tag-description');
    if (!desc) return;

    const column = parentItem.closest('.expertise-column');
    const isOpening = desc.style.display !== "block";

    // Close other descriptions in the same column when one is opened
    if (column) {
        column.querySelectorAll('.expertise-item').forEach(item => {
            if (item !== parentItem) {
                item.classList.remove('active');
                const otherDesc = item.querySelector('.tag-description');
                if (otherDesc) {
                    otherDesc.style.display = 'none';
                }
            }
        });
    }

    // Toggle the current description and its active state class
    if (isOpening) {
        desc.style.display = "block";
        parentItem.classList.add('active');
    } else {
        desc.style.display = "none";
        parentItem.classList.remove('active');
    }
}

// Portfolio filter category tabs and interactive dynamic video triggers
document.addEventListener('DOMContentLoaded', () => {
    // 1. Portfolio Category Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const videoCards = document.querySelectorAll('.video-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active state from current filters
            filterButtons.forEach(f => f.classList.remove('active'));
            // Set active state on clicked filter button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            videoCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                // Show/hide based on clicked tab value
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hidden');
                    card.classList.remove('fade-in');
                    // Force DOM reflow to restart CSS fade-in keyframes
                    void card.offsetWidth;
                    card.classList.add('fade-in');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // 2. Video Thumbnail Dynamic Play Handler
    const thumbnailContainers = document.querySelectorAll('.video-thumbnail-container');

    thumbnailContainers.forEach(container => {
        container.addEventListener('click', () => {
            const videoId = container.getAttribute('data-video-id');
            if (!videoId) return;

            // Generate iframe
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
            iframe.setAttribute('title', 'YouTube video player');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', 'true');

            // Generate wrapper div
            const wrapper = document.createElement('div');
            wrapper.className = 'video-embed';
            wrapper.appendChild(iframe);

            // Swap thumbnail container directly with embedded player
            container.replaceWith(wrapper);
        });
    });
});