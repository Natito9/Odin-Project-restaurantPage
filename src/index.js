
import './style.css';
import homeDefault from './home';
import  { loadMenu } from './menu.js';
import { loadAbout } from './about.js';


function displayHome() {     
 homeDefault();  
    
}

function displayMenu() {
  loadMenu();
}

function displayAbout() {
  loadAbout();
}


document.getElementById("homeButton").addEventListener("click", displayHome); 
displayHome(); 

document.getElementById("menuButton").addEventListener("click", displayMenu); 
displayMenu(); 

document.getElementById("aboutButton").addEventListener("click", displayAbout); 
displayAbout(); 
