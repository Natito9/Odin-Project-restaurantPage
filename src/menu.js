let content = document.getElementById("content");

export function loadMenu() { 
    content.textContent = "";
    createMenu();
    createDescription();
}

function createMenu() {
    const divMenu = document.createElement("div");
    divMenu.classList.add("divContainer");
    const heading = document.createElement("h2"); // Create a new heading element
    heading.textContent = "Our Menu"; // Set the text for the heading
    divMenu.appendChild(heading); // Append the heading to the divMenu

    const ul = document.createElement("ul");
    const items = ["Pancakes 45Kr", "Omelettes   50Kr", "Fruit Salad   35Kr", ];
    
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item; 
        ul.appendChild(li); 
    });
    
    divMenu.appendChild(ul);
    content.appendChild(divMenu);

};


function createDescription() {

    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = "Ask us about food allergies";
    content.appendChild(description);

};
