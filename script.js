// Access the button and audio elements
const startMicButton = document.getElementById('start-mic');
const audioOutput = document.getElementById('audio-output');

// Function to access the microphone
async function startMicrophone() {
    try {
        // Request microphone access directly
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        // Play audio through the audio element
        audioOutput.srcObject = stream;
        audioOutput.play();
        
        console.log('Microphone started successfully!');
    } catch (error) {
        console.error('Error accessing microphone:', error);
        alert('Could not access the microphone. Please grant permissions.');
    }
}

// Event listener for the button
startMicButton.addEventListener('click', startMicrophone);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(() => console.log('Service Worker registered successfully!'))
        .catch(error => console.error('Service Worker registration failed:', error));
}