// Language Library
const languageLibrary = [];

// DOM Elements
const languageForm = document.getElementById("languageForm");
const languageNameInput = document.getElementById("languageName");
const translationModeSelect = document.getElementById("translationMode");
const languageList = document.getElementById("languageList");

// Add Language Function
function addLanguage(event) {
  event.preventDefault();
  
  // Get form values
  const languageName = languageNameInput.value.trim();
  const translationMode = translationModeSelect.value;

  if (!languageName) {
    alert("Please enter a valid language name.");
    return;
  }

  // Save to library
  const newLanguage = { name: languageName, mode: translationMode };
  languageLibrary.push(newLanguage);

  // Update the UI
  updateLibraryUI();

  // Reset form
  languageForm.reset();
}

// Update Library UI
function updateLibraryUI() {
  languageList.innerHTML = "";
  languageLibrary.forEach((language, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${language.name} - Mode: ${language.mode}`;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeLanguage(index);
    listItem.appendChild(removeButton);
    languageList.appendChild(listItem);
  });
}

// Remove Language
function removeLanguage(index) {
  languageLibrary.splice(index, 1);
  updateLibraryUI();
}

// Event Listener
languageForm.addEventListener("submit", addLanguage);
