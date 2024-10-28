 let content = document.getElementById("content");


export function loadHome() { 
    content.textContent = "";
    createHeading();
    createDescription();
}

function createHeading() {


    const divOne = document.createElement("div");
    divOne.classList.add("divContainer");
    divOne.textContent = "Botanika Cafe";
    content.appendChild(divOne);

};


function createDescription() {

    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = "Visit us at one of our 4 locations in Upssala";
    content.appendChild(description);

};




