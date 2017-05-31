

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
  
    
      //grafica 1
      var xgrafica1=n1/x1;
       var ygrafica1=n1/y1;
       
       var xxx1=Math.ceil(xgrafica1);
      var yyy1= Math.ceil(ygrafica1);
       
       //GRAFICA 2
       
       var xgrafica2=n2/x2;
       var ygrafica2=n2/y2;
       
       var xxx2=Math.ceil(xgrafica2);
      var yyy2= Math.ceil(ygrafica2);
       
       //GRAFICA 3
        var xgrafica3; 
        var ygrafica3;
     if(x3.checked)
    {
      
    
    n3= document.getElementById("n3").value;
     xgrafica3=n3;
    ygrafica3=0;
}
   if(y3.checked)
{
    
    n3= document.getElementById("n3").value;
     ygrafica3=n3;
    xgrafica3=0;
    
} 
  
       
       
       //REDONDEOS DE GRAFICO
       /*var matx1=match.ceil(xgrafica1);
          var maty1=match.ceil(ygrafica1);
          var matx2=match.ceil(xgrafica2);
          var maty2=match.ceil(ygrafica2);
          var matgrafica3=match.ceil(ygrafica2);
       */
       //grafica 3
 var board = JXG.JSXGraph.initBoard('box', {boundingbox: [-5, 15, 15, -5], axis:true});
var p = board.create('point', [0, ygrafica1]),// EL PRIMER NUMERO (1) ES LA X, EL SEGUNDO ES LA Y PARA Q SEPA 
    q = board.create('point', [xgrafica1, 0]),//x
    //ECUACION 2
    h = board.create('point', [0, ygrafica2]),//x
    x = board.create('point', [xgrafica2, 0]),//x
     
    //ECUACION 3
    
          ecua3y = board.create('point', [0, ygrafica3]),//Y
            ecua3x = board.create('point', [xgrafica3, 0]),//x

   
    
    
    
    l = board.create('line', [p, q]);//, 
    l = board.create('line', [h, x],{fillColor: 'yellow'});//,
        l = board.create('line', [ecua3y]),//,
        l = board.create('line', [ecua3x]),//,
         ineq = board.create('inequality', [l]);
ineq = board.create('inequality', [l]);
  // l = board.create('line', [function() { return [c.Value(), 0, -1]; }], {strokeColor: 'black'});
    //l = board.create('inequality', [l], {inverse: true});

    

   // ineq = board.create('inequality', [l]);
//ineq = board.create('inequality', [l]);
    
}

//MIRE Q EL SE UBICA EN LOS PUNTOS DE LA GRAFICA ES FACIL EL PRIMER PUNTO SE PARA
//EN 1 DE LA RECTA X Y EN 3 DE LA RECTA Y