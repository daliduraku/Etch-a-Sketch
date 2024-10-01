let clear = document.querySelector("button");
let container = document.querySelector(".container"); 

clear.addEventListener('click', ()=>{ // we only want to add this listener once
    resetSize()
})


function resetSize(){
        
        let number = prompt("What size would you like the grid to be? (1-100)");
        if (number < 1 || number > 100 || isNaN(number)){
            alert("Please enter a number between 1 and 100.");
            return;
        }
        createGrid(number); 
}
        
        
//function to create a 16x16 grid
function createGrid(size){
    
    container.replaceChildren();
    
    let squareSize = 900 / size;
    
    for (let i = 0; i < size*size; i++) {
        
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.style.width = `${squareSize}px`;  
        square.style.height = `${squareSize}px`; 
        container.appendChild(square);

        //change background color of a square on hover
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = "black";
        });
   
    }

}

createGrid(16);
