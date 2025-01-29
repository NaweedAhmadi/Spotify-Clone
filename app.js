const slider = document.querySelector('#progress-bar');
const volume = document.querySelector('#volume');
const currentTime = document.querySelector('#current-time');

// Total duration in seconds (3:32 = 212 seconds)
const totalDuration = 3 * 60 + 32;

slider.addEventListener('input', () => {
    const value = slider.value;
    slider.style.setProperty(
        '--completed-portion',
        `${value}%`
    );

    // Calculate the current time based on the slider value
    const currentSeconds = Math.floor((value / 100) * totalDuration); // Map slider value (0-100) to time
    const minute = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;

    // Format the time string to include leading zeros for seconds
    currentTime.innerText = `${minute}:${seconds.toString().padStart(2, '0')}`;
});

volume.addEventListener('input', () => {
    const value = volume.value;
    volume.style.setProperty('--volume-level', `${value}%`);
});




