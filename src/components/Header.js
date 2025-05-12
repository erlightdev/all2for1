export function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
      <nav>
        <ul class="flex space-x-4">
          <li><a href="index.html" class="text-blue-500">Home</a></li>
          <li><a href="about.html" class="text-blue-500">About</a></li>
        </ul>
      </nav>
    `;
    return header;
  }