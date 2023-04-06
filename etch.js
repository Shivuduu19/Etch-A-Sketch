const gridContainer = document.querySelector("#grid-container");
const newGrid= document.createElement('button');
newGrid.innerHTML= "NEW GRID";
newGrid.addEventListener("click",refreshGrid);


function refreshGrid()
{
  let size= prompt("enter number of square divs per side");
  if(size<100){
  clearGrid();
  createGrid(size);
  const newGrid= document.createElement('button');
   newGrid.innerHTML= "NEW GRID";
   gridContainer.append(newGrid);
   newGrid.addEventListener("click",refreshGrid);
  }else{
    prompt("your entry is greater than 100.Please enter less than hundread");
  }
}
  
createGrid(16);
function createGrid(size){
  for(let i=1;i<=size*size;i++){
    let cell = document.createElement("div");
    cell.classList.add("cell");
    let height = 960/size;
    let width  = 960/size;
    cell.style.height=`${height}px`;
    cell.style.width=`${width}px`;
    gridContainer.appendChild(cell); 
    cell.addEventListener("mouseover",function(e)
    {
     e.target.classList.add("change");
    });
  };
};
gridContainer.append(newGrid);
function clearGrid(){
  gridContainer.innerHTML='';
}
