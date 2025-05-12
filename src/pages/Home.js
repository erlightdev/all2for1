import '../style.css';
import { createHeader } from '../components/header';
import { createFooter } from '../components/footer';

document.body.prepend(createHeader());
document.querySelector('#app').innerHTML = `
  <div>
    <h1 class="text-3xl font-bold underline">Home Page</h1>
    <p>Welcome to the home page!</p>
  </div>
`;
document.body.appendChild(createFooter());