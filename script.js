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
    // Check if closing modal3 (audio)
    if (modalId === 'modal3') {
      const audio = document.querySelector('#modal3 audio');
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  });
});

// Optional: Close modal when clicking outside modal content
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      // Also stop audio if modal3 is being closed this way
      if (modal.id === 'modal3') {
        const audio = modal.querySelector('audio');
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      }
    }
  });
});
