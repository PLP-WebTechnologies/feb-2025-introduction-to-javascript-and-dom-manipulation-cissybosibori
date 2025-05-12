// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // 1. Change Content Dynamically
    const heading = document.querySelector("header h1");
    heading.textContent = "Ready to Bake Something Awesome?";

    // 2. Modify CSS Styles via JavaScript
    const homeSection = document.getElementById("home");
    homeSection.style.backgroundColor = "#fff3e6";
    homeSection.style.padding = "20px";
    homeSection.style.borderRadius = "10px";

    // 3. Add a button to toggle an extra tip
    const tipButton = document.createElement("button");
    tipButton.textContent = "Show Baking Tip";
    tipButton.style.padding = "10px";
    tipButton.style.marginTop = "10px";
    tipButton.style.backgroundColor = "#ff9966";
    tipButton.style.color = "white";
    tipButton.style.border = "none";
    tipButton.style.borderRadius = "5px";
    tipButton.style.cursor = "pointer";

    homeSection.appendChild(tipButton);

    // Tip message element
    const tipMessage = document.createElement("p");
    tipMessage.textContent = "✨ Tip: Always preheat your oven before baking!";
    tipMessage.style.display = "none";
    tipMessage.style.fontStyle = "italic";
    tipMessage.style.marginTop = "10px";

    homeSection.appendChild(tipMessage);

    // 4. Toggle tip visibility
    tipButton.addEventListener("click", function () {
        if (tipMessage.style.display === "none") {
            tipMessage.style.display = "block";
            tipButton.textContent = "Hide Baking Tip";
        } else {
            tipMessage.style.display = "none";
            tipButton.textContent = "Show Baking Tip";
        }
    });
});
