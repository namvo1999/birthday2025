const confettiSettings = { target: 'confetti' };
const confetti = new window.ConfettiGenerator(confettiSettings);

document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-container");
    let lastClickedCell = null; // Track the last clicked cell
    const collectedNames = new Set(); // Track collected names
    const victoryNames = ["Nam"]; // Victory condition names

    // Preload all character images
    characters.forEach(character => {
        if (character.image) {
            const img = new Image();
            img.src = character.image;
        }
    });

    // Preload all music files
    characters.forEach(character => {
        if (character.musicPath) {
            const audio = new Audio();
            audio.src = character.musicPath;
            audio.load();
        }
    });

    // Shuffle the characters array
    function shuffleCharacters(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleCharacters(characters); // Shuffle characters on page load

    // Create 25 cells (5x5 grid)
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement("div");
        cell.addEventListener("click", () => {
            lastClickedCell = cell; // Store the clicked cell
            const character = characters[i % characters.length]; // Cycle through characters
            showPopup(character.name, character.image, character.dialogs);
        });
        gridContainer.appendChild(cell);
    }

    // Store a global reference to the currently playing audio
    let currentAudio = null;

    // Function to show a popup with multiple dialogs
    function showPopup(characterName, characterImageSrc, dialogs) {
        let dialogIndex = 0; // Track the current dialog index

        // Find the character object to get musicPath and musicStart
        const character = characters.find(c => c.name === characterName);
        let audio = null;
        if (character && character.musicPath) {
            // Stop any currently playing audio before starting new one
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            audio = new Audio(character.musicPath);
            audio.currentTime = character.musicStart || 0;
            currentAudio = audio;
        }

        // Create modal elements
        const modal = document.createElement("div");
        modal.className = "modal";

        const modalContent = document.createElement("div");
        modalContent.className = "modal-content";

        const closeButton = document.createElement("span");
        closeButton.className = "close-button";
        closeButton.innerHTML = "&times;";
        closeButton.addEventListener("click", closeModal);

        const characterImage = document.createElement("img");
        characterImage.src = characterImageSrc; // Set character image
        characterImage.alt = characterName;

        const dialogElement = document.createElement("p");
        dialogElement.className = "dialog";

        // Function to update the dialog content
        function updateDialog() {
            if (dialogIndex === 0) {
                dialogElement.textContent = characterName; // Show character name first
                // Play music on first dialog
                if (audio) {
                    audio.play();
                }
            } else if (dialogIndex <= dialogs.length) {
                dialogElement.textContent = dialogs[dialogIndex - 1]; // Show dialog text
            } else {
                closeModal(); // Close modal when dialogs are finished
            }
            dialogIndex++;
        }

        // Add click event to progress through dialogs
        modalContent.addEventListener("click", updateDialog);

        // Append elements
        modalContent.appendChild(closeButton);
        modalContent.appendChild(characterImage); // Add character image
        modalContent.appendChild(dialogElement); // Add dialog text
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Initialize the first dialog
        updateDialog();

        // Add keydown event listener for Esc key
        document.addEventListener("keydown", handleKeydown);

        function closeModal() {
            modal.remove(); // Remove modal on close
            document.removeEventListener("keydown", handleKeydown); // Remove keydown listener
            if (lastClickedCell) {
                lastClickedCell.style.backgroundImage = `url('${characterImageSrc}')`; // Update cell background
                lastClickedCell.style.backgroundSize = "cover";
                lastClickedCell.style.backgroundPosition = "center";
            }
            // Do NOT stop music here, keep it playing after modal closes
            if (characterName) {
                collectedNames.add(characterName);
                checkVictory();
            }
        }

        function handleKeydown(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        }
    }

    // Function to show a victory popup with full-screen graffiti
    let victoryShown = false; // Ensure only one victory popup per win
    function showVictoryPopup() {
        if (victoryShown) return; // Prevent multiple popups
        victoryShown = true;
        // Create modal elements
        const modal = document.createElement("div");
        modal.className = "modal";

        const modalContent = document.createElement("div");
        modalContent.className = "modal-content";

        const closeButton = document.createElement("span");
        closeButton.className = "close-button";
        closeButton.innerHTML = "&times;";
        closeButton.addEventListener("click", closeModal);

        const victoryMessage = document.createElement("p");
        victoryMessage.className = "dialog";
        victoryMessage.textContent = "Chúc mừng cậu đã hoàn thành trò chơi!"; // Victory message

        // Append elements
        modalContent.appendChild(closeButton);
        modalContent.appendChild(victoryMessage);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        confetti.render();
        // Add keydown event listener for Esc key
        document.addEventListener("keydown", handleKeydown);

        function closeModal() {
            modal.remove(); // Remove modal on close
            document.removeEventListener("keydown", handleKeydown); // Remove keydown listener
        }

        function handleKeydown(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        }
    }

    // Function to check for victory
    function checkVictory() {
        if(victoryShown)
            return;
        if (victoryNames.every(name => collectedNames.has(name))) {
            showVictoryPopup(); // Show victory popup with full-screen graffiti
        }
    }
});
