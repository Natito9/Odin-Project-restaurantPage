function loadHome() {
    const content = document.getElementById('content');
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Our Restaurant';
    content.appendChild(heading);
  }
  
  export default loadHome;
  