console.log("hello");
import './style.css';
import { loadHome } from './home.js';
import  { loadMenu } from './menu.js';



function displayHome() { 
    
 loadHome();  
    
  }
function displayMenu() {
  loadMenu();
}

document.getElementById("homeButton").addEventListener("click", displayHome); 
displayHome(); 

document.getElementById("menuButton").addEventListener("click", displayMenu); 
displayMenu(); 

// document.getElementById("aboutButton").addEventListener("click", displayHome); 
// displayButton(); 
