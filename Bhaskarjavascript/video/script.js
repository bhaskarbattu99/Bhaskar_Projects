// Select video and button
let video = document.querySelector('#video');
let playPauseBtn = document.querySelector('#playPauseBtn');

// Add event listener to the button
playPauseBtn.addEventListener('click', () => {
  // Check if video is playing
  if (playPauseBtn.classList.contains('paused')) {
    video.play(); // Play the video
    playPauseBtn.textContent = 'Pause';
    playPauseBtn.classList.remove('paused'); // Update button state
  } else {
    video.pause(); // Pause the video
    playPauseBtn.textContent = 'Play';
    playPauseBtn.classList.add('paused'); // Update button state
  }
});
