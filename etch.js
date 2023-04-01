const gridContainer = document.querySelector("#grid-container");
createGrid(16);

function createGrid(x){
  for(i=0;i<16;i++){
    for(j=0;j<16;j++){
      const divs =document.createElement('div');
      gridContainer.appendChild(divs);
      divs.classList.add("cell");
      console.log(divs);
            let height=960/x;
            let width =960/x;
            divs.style.width=`${height}px`;
            divs.style.height=`${width}px`;
    }
  }
            //let height=972/x-1;
            //let width =972/x-1;
            //divs.style.width=`${height}px`;
            //divs.style.height=`${width}px`;
}