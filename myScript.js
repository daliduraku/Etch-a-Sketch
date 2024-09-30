let color = "#D3D3D3"

const cdiv = document.querySelector('.container');
// add 16 divs

for(let i = 0; i < 273; i++){
    const div = document.createElement('div');
    cdiv.appendChild(div);

    div.addEventListener("mouseover", function(){
        this.style.backgroundColor = color;
    })

    /*
    div.addEventListener("mouseout", function(){

        this.style.backgroundColor = "";
    })
    */
}
