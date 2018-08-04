const container = document.querySelector('#grid-container');
const TOTAL_PIXELS = 620;

for (i = 0; i < 1600; i++) {
    const content = document.createElement('div');
    content.classList.add('content'); 
    content.className = 'grid-block';       
    container.appendChild(content);
}



var i = 0;
var value = " ";
while (i < 40) {
    //var value = " ";
    value += "auto " 
    // container.style.gridTemplateColumns = value;
    i++;
    // console.log(value);
}
container.style.gridTemplateColumns = value;
//console.log(value);



/** Add hover event listener to each block in grid */
const block = document.getElementsByClassName('grid-block');

for (i = 0; i < block.length; i++) {   

    block[i].addEventListener('mouseover', (play) => {

        play.target.style.backgroundColor = "blue";

    });
};

/** Reset display */
const reset = document.getElementById('reset');   

reset.addEventListener('click', (toReset) => {
    for (i = 0; i < block.length; i++) { 

        block[i].style.backgroundColor = "lightblue";
    }

});

/** Adjust number of squares */

