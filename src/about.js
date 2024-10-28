let content = document.getElementById("content");


export function loadAbout() { 
    content.textContent = "";
    createHeading();
    createDescription();
}

function createHeading() {


    const divOne = document.createElement("div");
    divOne.classList.add("divContainer");
    divOne.textContent = "About us";
    content.appendChild(divOne);

};


function createDescription() {

    const description = document.createElement("div");
    description.classList.add("headingText");
    description.textContent = "Botanika Cafe";
    content.appendChild(description);

    const description1 = document.createElement("div");
    description1.classList.add("description");
    description1.textContent = "Welcome to Botanika Cafe, a cozy haven filled with lush greenery and vibrant plants. Enjoy our delicious brews and treats in a warm, inviting atmosphere where nature meets comfort. Join us for a delightful experience that nourishes both body and soul!";
    content.appendChild(description1); 

};
