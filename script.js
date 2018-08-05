const container = document.querySelector('#grid-container');
const TOTAL_PIXELS = 620;
let numbSquares;


/** set height/width dimesions of blocks to add to webpage */
function setDivs(totalSquares) {
    for (i = 0; i < totalSquares*totalSquares; i++) {
        const content = document.createElement('div');        
        content.setAttribute("style", "width: " + TOTAL_PIXELS / totalSquares + "px"+ "; "+
        "height: " + TOTAL_PIXELS / totalSquares + "px");
        content.classList.add('content'); 
        content.className = 'grid-block';          
        container.appendChild(content);
        
    }
}

/** Create an x by x grid */
function createGrid(totalSquares) {
    var i = 0;
    var value = " ";
    while (i < totalSquares) {        
        value += "auto "         
        i++;        
    }
    container.style.gridTemplateColumns = value;  
    
}



/** Add hover event listener to each block in grid */
const block = document.getElementsByClassName('grid-block');

function setEventListener() {

    for (i = 0; i < block.length; i++) {   

        block[i].addEventListener('mouseover', (play) => {

            play.target.style.backgroundColor = "blue";

        });
    };
}
/** Reset display */
const reset = document.getElementById('reset');   
    
    reset.addEventListener('click', (toReset) => {
        var div = document.getElementById('grid-container');
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }

        for (i = 0; i < block.length; i++) { 

            block[i].style.backgroundColor = "lightblue";
        }

        let total = setTotalSquares();
        
        setDivs(total);
        createGrid(total);
        setEventListener();      

    });


/** Adjust number of squares */
function setTotalSquares() {
    let amount = Number(prompt("Enter number of squares"));
    return amount;    
}

/** Creat initial game state */
function start() {
    numbSquares = 40;
    
    setDivs(numbSquares);
    createGrid(numbSquares);
    setEventListener(); 
}
start();




