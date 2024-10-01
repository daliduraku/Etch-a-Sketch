let clear = document.querySelector("button");
let container = document.querySelector(".container"); 

clear.addEventListener('click', ()=>{ // we only want to add this listener once
    resetSize()
})


function resetSize(){
        
        let number = prompt("What size would you like the grid to be? (1-100)");
        createGrid(number); // call the createGrid function here and pass the number they entered as the argument. 
}
        
        
//function to create a 16x16 grid
function createGrid(size){
    
    container.replaceChildren();
    for (let i = 0; i < size*size; i++) {
        
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        container.appendChild(square);

        //change background color of a square on hover
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = "black";
        })

        //function to reset the grid
        function clearGrid(){
            clear.addEventListener('click', e=>{
                square.style.backgroundColor = "white"
           })
        }

        clearGrid();    
    }

}

createGrid(16);
