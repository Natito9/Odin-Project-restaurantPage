import './styles.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function loadPage() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clear previous content
  loadHome(); // Load home page by default
}

document.addEventListener('DOMContentLoaded', loadPage);
