const gridContainer = document.querySelector("#grid-container");
createGrid(16);

function createGrid(x){
  for(i=0;i<x;i++){
    for(j=0;j<x;j++){
      const divs =document.createElement('div');
      gridContainer.appendChild(divs);
      divs.classList.add("cell");
      console.log(divs);
            let height=x*60+x+5;
            let width =x*60+x+5;
            gridContainer.style.width=`${height}px`;
            gridContainer.style.height=`${width}px`;
    }
  }
}