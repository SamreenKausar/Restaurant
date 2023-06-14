import './Assets/css/style.css';
const content  = document.querySelector('#content');
function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = 'hello';
   element.classList.add('hello');
 
    return element;
  }
 
  content.appendChild(component());