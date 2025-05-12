document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-container");
    let lastClickedCell = null; // Track the last clicked cell
    const collectedNames = new Set(); // Track collected names
    const victoryNames = ["The Crown", "The Cake", "The Flower", "The Dress", "The Shoes"]; // Victory condition names

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

    // Function to show a popup with multiple dialogs
    function showPopup(characterName, characterImageSrc, dialogs) {
        let dialogIndex = 0; // Track the current dialog index

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

            // Add the name to collectedNames and check for victory
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
    function showVictoryPopup() {
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

        // Create full-screen canvas for graffiti
        const canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.zIndex = "-1"; // Place behind other elements
        drawGraffiti(canvas);

        // Append elements
        document.body.appendChild(canvas); // Add canvas to body
        modalContent.appendChild(closeButton);
        modalContent.appendChild(victoryMessage);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Add keydown event listener for Esc key
        document.addEventListener("keydown", handleKeydown);

        function closeModal() {
            modal.remove(); // Remove modal on close
            canvas.remove(); // Remove canvas on close
            document.removeEventListener("keydown", handleKeydown); // Remove keydown listener
        }

        function handleKeydown(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        }
    }

    // Function to draw graffiti on the canvas
    function drawGraffiti(canvas) {
        const ctx = canvas.getContext("2d");

        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#ff7eb3");
        gradient.addColorStop(1, "#ff758c");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Text graffiti
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.fillText("Victory!", canvas.width / 2, canvas.height / 2 - 20);

        // Add some random splashes
        for (let i = 0; i < 100; i++) {
            ctx.beginPath();
            ctx.arc(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                Math.random() * 10 + 5,
                0,
                Math.PI * 2
            );
            ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`;
            ctx.fill();
        }
    }

    // Function to check for victory
    function checkVictory() {
        if (victoryNames.every(name => collectedNames.has(name))) {
            showVictoryPopup(); // Show victory popup with full-screen graffiti
        }
    }

    // Countdown logic
    const targetDate = new Date("2025-12-31"); // Set target date
    const countdownElement = document.getElementById("days-left");

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        countdownElement.textContent = daysLeft > 0 ? daysLeft : "0"; // Show 0 if the date has passed
    }

    updateCountdown(); // Initialize countdown
    setInterval(updateCountdown, 86400000); // Update every 24 hours
});
    