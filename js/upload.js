function uploadFiles() {
    const videoInput = document.getElementById('videoFile');
    const jsonInput = document.getElementById('jsonFile');

    if (videoInput.files.length > 0 && jsonInput.files.length > 0) {
        const videoFile = videoInput.files[0];
        const jsonFile = jsonInput.files[0];

        // Generate a timestamp string
        const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '');
        const baseName = timestamp; // e.g., '20230212123045' for Feb 12, 2023, at 12:30:45

        // Construct file names
        const newVideoName = baseName + '.mp4'; // Assuming video is in .mp4 format
        const newJsonName = baseName + '.json';

        uploadToS3(videoFile, newVideoName);
        uploadToS3(jsonFile, newJsonName);
    } else {
        console.log('Files are missing');
    }
}

function uploadToS3(file, fileName) {
    const formData = new FormData();
    formData.append('file', file, fileName);

    const s3BucketUrl = 'https://marketing-videos-clayton.s3.amazonaws.com/';

    fetch(s3BucketUrl + encodeURIComponent(fileName), {
        method: 'PUT',
        body: file,
        headers: {
            'Content-Type': file.type,
        },
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => console.log(fileName + ' uploaded successfully'))
    .catch(error => console.error('Error:', error));
}