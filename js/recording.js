function uploadFiles(videoFile) {
  const textInput1 = document.getElementById('text-in1');
  const textInput2 = document.getElementById('text-in2');
  const textInput3 = document.getElementById('text-in3');
  const textInput4 = document.getElementById('text-in4');
  const musicSelect = document.getElementById('musicSelect');

  // Create a new JSON object with the desired values
  const jsonData = {
      text1: textInput1.value,
      text2: textInput2.value,
      text3: textInput3.value,
      text4: textInput4.value,
      music: musicSelect.value
  };

  // Generate a timestamp string
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '');
  const baseName = timestamp; // e.g., '20230212123045' for Feb 12, 2023, at 12:30:45

  // Construct file names
  const newVideoName = baseName + '.webm'; // Assuming video is in .webm format
  const newJsonName = baseName + '.json';

  // Upload JSON content to S3
  uploadToS3(videoFile, newVideoName);
  uploadToS3(new Blob([JSON.stringify(jsonData)], { type: 'application/json' }), newJsonName);
}



function uploadToS3(file, fileName) {
  const formData = new FormData();
  formData.append('file', file, fileName);

  const s3BucketUrl = 'https://marketing-tester-videos.s3.amazonaws.com/';

  fetch(s3BucketUrl + encodeURIComponent(fileName), {
      method: 'PUT',
      body: file,
      headers: {
          'Content-Type': file.type,
      },
      mode: 'cors', // Add this line
  })
  .then(response => {
      if (response.ok) {
        console.log(response.text)
          return response.text();
      }
      throw new Error('Network response was not ok.');
  })
  .then(data => console.log(fileName + ' uploaded successfully'))
  .catch(error => console.error('Error:', error));
}
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

      const UploadLink = document.createElement('button');
      UploadLink.textContent = 'Upload';
      
      UploadLink.setAttribute('upload', 'recorded-video.webm');
      UploadLink.addEventListener('click', () => {
        uploadFiles(blob)
      })

      const videoContainer = document.createElement('div');
      videoContainer.appendChild(videoElement);
      videoContainer.appendChild(deleteBtn);
      videoContainer.appendChild(UploadLink);

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