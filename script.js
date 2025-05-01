// Change text and CSS style dynamically
document.getElementById("change-btn").addEventListener("click", () => {
    const textElement = document.getElementById("dynamic-text");
    textElement.textContent = "The text has been updated with JavaScript!";
    textElement.style.color = "blue";
    textElement.style.fontWeight = "bold";
});


//adding/removing an element dynamically
document.getElementById("toggle-btn").addEventListener("click", () => {
    const container = document.getElementById("box-container");
    const existingBox = document.getElementById("dynamic-box");

    if (existingBox) {
        container.removeChild(existingBox);
    }else{
        const newBox = document.createElement("div");
        newBox.id = "dynamic-box";
        newBox.textContent = "I was added later/dynamically";
        newBox.style.backgroundColor = "#f2f2f2";
        newBox.style.padding = "15px";
        newBox.style.marginTop = "10px";
        container.appendChild(newBox)
    }
});