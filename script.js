function toggleDesc(element) {
    const parentItem = element.closest('.expertise-item');
    if (!parentItem) return;

    const desc = parentItem.querySelector('.tag-description');
    if (!desc) return;

    // Optional: Close other descriptions in the same column when one is opened
    const column = parentItem.closest('.expertise-column');
    if (column) {
        column.querySelectorAll('.tag-description').forEach(otherDesc => {
            if (otherDesc !== desc) {
                otherDesc.style.display = 'none';
            }
        });
    }

    // Toggle the current description
    if (desc.style.display === "block") {
        desc.style.display = "none";
    } else {
        desc.style.display = "block";
    }
}