const container = document.querySelector(".container");
const squares = 800;
const colors = ["rgb(255, 87, 51)", "rgb(51, 255, 87)", "rgb(51, 87, 255)", "rgb(240, 51, 255)", "rgb(255, 195, 0)"];
const defaultColor = "rgb(29, 29, 29)"; 

// Create 800 squares dynamically
for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.backgroundColor = defaultColor; 
    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}

// Change color on hover
function setColor(element) {
    element.style.backgroundColor = getRandomColor();
}

// Reset color after 1 second smoothly
function removeColor(element) {
    setTimeout(() => {
        element.style.backgroundColor = defaultColor;
    }, 1000);
}

// Select a random color
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}