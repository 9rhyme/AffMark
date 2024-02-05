const videoType = 'video/webm';
let stream, mediaRecorder, chunks = [];
const video = document.getElementById('video');
const startRecordBtn = document.getElementById('startRecord');
const stopRecordBtn = document.getElementById('stopRecord');
const videoListContainer = document.getElementById('videoList');

// Initialize the page
async function initializePage() {
  try {
    // Get display media permission
    stream = await navigator.mediaDevices.getDisplayMedia({preferCurrentTab:true, video: true, audio: false });
    video.srcObject = stream;
    video.play();

    // Set up media recorder
    mediaRecorder = new MediaRecorder(stream, { mimeType: videoType });
    chunks = [];

    mediaRecorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        chunks.push(e.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: videoType });
      const videoURL = URL.createObjectURL(blob);
      const videoElement = document.createElement('video');
      videoElement.src = videoURL;
      videoElement.style.width = '200px';
      videoElement.setAttribute('controls', true);

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => deleteVideo(videoElement));

      const downloadLink = document.createElement('a');
      downloadLink.textContent = 'Download';
      downloadLink.href = videoURL;
      downloadLink.setAttribute('download', 'recorded-video.webm');

      const videoContainer = document.createElement('div');
      videoContainer.appendChild(videoElement);
      videoContainer.appendChild(deleteBtn);
      videoContainer.appendChild(downloadLink);

      videoListContainer.appendChild(videoContainer);
    };

    startRecordBtn.disabled = false;
  } catch (error) {
    console.error('Error initializing recording:', error);
  }
}

// Start recording button click handler
startRecordBtn.addEventListener('click', () => {
  startRecording();
  startRecordBtn.disabled = true;
  stopRecordBtn.disabled = false;
});

// Stop recording button click handler
stopRecordBtn.addEventListener('click', () => {
  stopRecording();
  startRecordBtn.disabled = false;
  stopRecordBtn.disabled = true;
});

// Delete video button click handler
function deleteVideo(videoElement) {
  videoListContainer.removeChild(videoElement.parentElement);
}

// Initialize the page on load
window.addEventListener('load', initializePage);

// Start recording function
function startRecording() {
  chunks = [];
  mediaRecorder.start(10);
}

// Stop recording function
function stopRecording() {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
  }
}