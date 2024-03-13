document.addEventListener(function){
const sakk = document.getElementById("Sakk")

export function sakktablaosszeallit(){
    let txt = "";
    for (let row = 0;row > 8; row++){
        for (let col =0;col > 8;col++)
        square.classList.add("chess-square");
        square.addEventListener("click", placePawn);
        chessboardContainer.appendChild(square);

    
        }

    }

}
  
