function handleImageClick(element) {
  var isActive = element.classList.contains('active');
  var radioInput = element.querySelector('input[type=radio]');
  var bg_div = document.getElementById('bg_div');

  if (isActive) {
      // If the clicked image is already active, remove the image from 'bg_div'
      bg_div.innerHTML = '';
      element.classList.remove('active');
      if (radioInput) {
          radioInput.checked = false;
      }
  } else {
      // Deselect other images
      var images = document.querySelectorAll('.BGcontent .image');
      for (var i = 0; i < images.length; i++) {
          images[i].classList.remove('active');
          var otherRadioInput = images[i].querySelector('input[type=radio]');
          if (otherRadioInput) {
              otherRadioInput.checked = false;
          }
      }

      // Select the clicked image
      element.classList.add('active');
      if (radioInput) {
          radioInput.checked = true;
      }
      var innerElements = document.querySelectorAll('.inner');
  if (innerElements) {
    innerElements.forEach(function (element) {
      element.style.removeProperty('background-color');

    });
  }
      // Create and append a new image to 'bg_div'
      var newImage = document.createElement('img');
      newImage.src = element.querySelector('img').src;
      newImage.style.width = '100%';
      newImage.style.height = '100%';
      bg_div.innerHTML = ''; // Clear existing content
      bg_div.appendChild(newImage);
  }
}