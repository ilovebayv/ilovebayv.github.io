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