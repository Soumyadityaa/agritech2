// Add your JavaScript code here

// Example: Manage crops
const cropList = document.getElementById('crop-list');
const addCropForm = document.getElementById('add-crop-form');

// Simulating stored crops
let crops = [];

// Function to display crops
function displayCrops() {
  cropList.innerHTML = '';
  crops.forEach((crop, index) => {
    const cropItem = document.createElement('div');
    cropItem.classList.add('crop-item');
    cropItem.innerHTML = `
      <h3>${crop.name}</h3>
      <p>Growth Stage: ${crop.stage}</p>
      <button class="delete-button" data-index="${index}">Delete</button>
    `;
    cropList.appendChild(cropItem);
  });
}

// Function to add a new crop
addCropForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const cropName = document.getElementById('crop-name').value;
  const growthStage = document.getElementById('growth-stage').value;
  const newCrop = {
    name: cropName,
    stage: growthStage,
  };
  crops.push(newCrop);
  displayCrops();
  addCropForm.reset();
});

// Function to delete a crop
cropList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    const index = event.target.getAttribute('data-index');
    crops.splice(index, 1);
    displayCrops();
  }
});

// Initial display of crops
displayCrops();
