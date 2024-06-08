/*chapter page draggable*/
document.addEventListener('DOMContentLoaded', (event) => {
    const draggable = document.getElementById('draggable');
    let isDragging = false;
    let offsetX, offsetY;

    draggable.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - draggable.getBoundingClientRect().left;
        offsetY = e.clientY - draggable.getBoundingClientRect().top;
        draggable.style.cursor = 'grabbing'; // Change cursor to indicate dragging
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            draggable.style.left = `${e.clientX - offsetX}px`;
            draggable.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        draggable.style.cursor = 'move'; // Reset cursor
    });
});
