// Function to shuffle the array (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to create the game board
function createBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    let numbers = Array.from({ length: 15 }, (_, index) => index + 1);
    shuffleArray(numbers);

    // Add the empty cell
    numbers.push("");
    for (let number of numbers) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.textContent = number;
        if (number === "") {
            tile.classList.add('empty');
        } else {
            tile.addEventListener('click', () => moveTile(tile));
        }
        board.appendChild(tile);
    }
}

// Function to swap the empty cell with the clicked tile
function moveTile(tile) {
    const emptyTile = document.querySelector('.tile.empty');
    if (!emptyTile) return;

    const tileIndex = Array.from(tile.parentNode.children).indexOf(tile);
    const emptyIndex = Array.from(tile.parentNode.children).indexOf(emptyTile);

    // Check if the clicked tile is adjacent to the empty cell
    if (Math.abs(tileIndex - emptyIndex) === 1 || Math.abs(tileIndex - emptyIndex) === 4) {
        [tile.textContent, emptyTile.textContent] = [emptyTile.textContent, tile.textContent];
        tile.classList.toggle('empty');
        emptyTile.classList.toggle('empty');
    }

    // Check if the puzzle is solved
    const tiles = document.querySelectorAll('.tile');
    const numbers = Array.from(tiles).map(tile => tile.textContent);
    
    if (numbers.slice(0, -1).every((number, index) => Number(number) === index + 1)) {
        setTimeout(() => alert('Congratulations! You solved the puzzle!'), 100);
    }
}

// Function to start a new game
function startGame() {
    createBoard();
}

// Initialize the game board on page load
document.addEventListener('DOMContentLoaded', startGame);

function subscribe() {
    window.location.href = 'https://m.youtube.com/@TechSinkoo';
}
