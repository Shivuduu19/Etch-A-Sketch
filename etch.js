const gridContainer = document.querySelector("#grid-container");
createGrid(16);

function createGrid(x){
  for(i=0;i<x;i++){
    for(j=0;j<x;j++)
    {
     const divs =document.createElement('div');
     gridContainer.appendChild(divs);
     divs.classList.add("cell");
     let height=x*60+1.5*x;
     let width =x*60+1.5*x;
     gridContainer.style.width=`${width}px`;
     gridContainer.style.height=`${height}px`;
     divs.addEventListener("mouseover",function(e)
     {
      e.target.classList.add("change");
     });
    }
  }
}