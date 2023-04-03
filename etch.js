const gridContainer = document.querySelector("#grid-container");
let x = prompt("enter numner of squares per side");

createGrid(x);

function createGrid(x){
  for(i=0;i<x;i++){
    for(j=0;j<x;j++)
    {
     const divs =document.createElement('div');
     gridContainer.appendChild(divs);
     divs.classList.add("cell");
     let height=960/x;
     let width =960/x;
     divs.style.width=`${width}px`;
     divs.style.height=`${height}px`;
     divs.addEventListener("mouseover",function(e)
     {
      e.target.classList.add("change");
     });
    }
  }
}