export function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <div class="text-center p-4">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    `;
    return footer;
  }