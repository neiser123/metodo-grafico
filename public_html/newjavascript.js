

function capturar_grafico()
{
    
    
    var x1,y1,n1,x2,y2,n2,x3,y3,n3;
    //ecuacion uno
    x1= document.getElementById("x1").value;
     y1= document.getElementById("y1").value;
      n1= document.getElementById("n1").value;
      
      //ecuacion dos
       x2= document.getElementById("x2").value;
     y2= document.getElementById("y2").value;
      n2= document.getElementById("n2").value;
      
       //ecuacion tres
      
       x3= document.getElementById("x3");
     y3= document.getElementById("y3");
  
if(x3.checked)
{
    
    n3= document.getElementById("n3").value;
    var xgrafica3=n3;
}
   if(y3.checked)
{
    
    n3= document.getElementById("n3").value;
    var ygrafica3=n3;
} 
      
      //grafica 1
      var xgrafica1=n1/x1;
       var ygrafica1=n1/y1;
       
       //grafica 2
       
       var xgrafica2=n2/x2;
       var ygrafica2=n2/y2;
       
       //grafica 3
       
var b = JXG.JSXGraph.initBoard('box', {boundingbox: [-5, 5, 5, -5], axis:true});
var c = b.create('slider', [[-3,4], [2,4], [-5,1,5]]),
    line1 = b.create('line', [function() { return [c.Value(), 0, -1]; }], {strokeColor: 'black'}),
    ineq1 = b.create('inequality', [line1], {inverse: true}),

    line2 = b.create('line', [1, 2, -3]), // Line y = 2/3 x + 1 or 0 = -3y + 2x +1
    ineq2 = b.create('inequality', [line2], {fillColor: 'yellow'});
    
}
