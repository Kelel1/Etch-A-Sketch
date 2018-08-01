const container = document.querySelector('#grid-container');

for(i = 0; i < 256; i++) {
    const content = document.createElement('div');
    content.classList.add('content'); 
    content.className = 'grid-block';       
    container.appendChild(content);
}