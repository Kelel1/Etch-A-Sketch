const container = document.querySelector('#grid-container');

for(i = 0; i <= 15; i++) {
    const content = document.createElement('div');
    content.classList.add('content'); 
    content.className = i;   
    container.appendChild(content);
}