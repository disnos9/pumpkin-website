// Open the modal and display the clicked image
function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImage.src = image.src;
    modalImage.style.transform = "scale(1)";
}

// Close the modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}