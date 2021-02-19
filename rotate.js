/*let mousePOS = {};

document.onmousemove = function(e){
    mousePOS.X = e.pageX;
    mousePOS.Y = e.pageY;
}

let prevPOS = {X: null, Y: null};
let kaiser = document.getElementById("kaiser");


let kaiserInterval = setInterval(function(){
   if(mousePOS.X != prevPOS.X || mousePOS.Y != prevPOS.Y && (prevPOS.Y != null || prevPOS.X != null)){
      let kaiserX = kaiser.style.left;
      let kaiserY = kaiser.style.top;
      let diffX = kaiserX - mousePOS.X;
      let diffY = kaiserY - mousePOS.Y;
      let tan = diffY / diffX;
      var atan = Math.atan(tan)* 180 / Math.PI;
      if(diffY > 0 && diffX > 0) {
      
        atan += 180; 
    }
    else if(diffY < 0 && diffX > 0) {
    
        atan -= 180;
    }
    prevPOS.X = mousePOS.X;
    prevPOS.Y = mousePOS.Y;
    kaiser.style.transform = "rotate("+ atan +"deg)";
   }
}, 10); */

function getCenter(element) {
    const {left, top, width, height} = element.getBoundingClientRect();
    return {x: left + width / 2, y: top + height / 2}
}

const arrow = document.querySelector("#kaiser");
const arrowCenter = getCenter(arrow);
addEventListener("mousemove", ({clientX, clientY}) => {
    const angle = Math.atan2(clientY - arrowCenter.y, clientX - arrowCenter.x);
    arrow.style.transform = `rotate(${angle}rad)`;
});