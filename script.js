const container = document.querySelector('#grid-container');

for(i = 0; i < 256; i++) {
    const content = document.createElement('div');
    content.classList.add('content'); 
    content.className = 'grid-block';       
    container.appendChild(content);
}


/** Add hover event listener to each block in grid */
const block = document.getElementsByClassName('grid-block');

for (i = 0; i < block.length; i++) {   

    block[i].addEventListener('mouseover', (play) => {

        play.target.style.backgroundColor = "blue";

    })
}

