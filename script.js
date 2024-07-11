document.getElementById('colorButton').addEventListener('click', generateRandomColor);

function generateRandomColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = randomColor;
    colorBox.textContent = randomColor;
}