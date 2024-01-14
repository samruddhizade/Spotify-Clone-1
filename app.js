document.addEventListener('DOMContentLoaded', () => {
    const trackList = document.getElementById('track-list');
    const audioPlayer = document.getElementById('audio-player');
    const trackName = document.getElementById('track-name');

    // Sample track data (you would fetch this from your backend)
    const tracks = [
        { name: 'Track 1', url: 'path/to/track1.mp3' },
        { name: 'Track 2', url: 'path/to/track2.mp3' },
        // Add more tracks as needed
    ];

    // Populate the track list
    tracks.forEach((track, index) => {
        const trackItem = createTrackItem(track, index);
        trackList.appendChild(trackItem);
    });

    // Set the first track as the default
    loadTrack(0);
});

function createTrackItem(track, index) {
    const trackItem = document.createElement('li');
    trackItem.classList.add('track-item');
    trackItem.textContent = track.name;
    trackItem.addEventListener('click', () => loadTrack(index));
    return trackItem;
}

function loadTrack(index) {
    const selectedTrack = tracks[index];
    trackName.textContent = selectedTrack.name;
    audioPlayer.src = selectedTrack.url;
    audioPlayer.load();
    audioPlayer.play();
}
