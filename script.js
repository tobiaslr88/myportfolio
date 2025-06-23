// Open the modal when any grid-item is clicked
document.querySelectorAll('.grid-item').forEach(img => {
  img.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'flex';
  });
});

// Close the modal when the close span is clicked
document.querySelectorAll('.modal .close').forEach(btn => {
  btn.addEventListener('click', function() {
    this.closest('.modal').style.display = 'none';
  });
});

// Close the modal when clicking outside the modal-content
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
