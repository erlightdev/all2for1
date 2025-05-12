import '../style.css';
import { createHeader } from '../components/Header';
import { createFooter } from '../components/Footer';

document.body.prepend(createHeader());
document.querySelector('#about').innerHTML = `
  <div>
    <h1 class="text-3xl font-bold underline">About Page</h1>
    <p>This is the about page of our Vite application.</p>
  </div>
`;
document.body.appendChild(createFooter());