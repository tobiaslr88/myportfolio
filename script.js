document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('click', () => {
    const modalId = item.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('active');
  });
});

document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-close');
    document.getElementById(modalId).classList.remove('active');
  });
});

// Optional: Close modal when clicking outside modal content
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
});
