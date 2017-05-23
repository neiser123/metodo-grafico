

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
       x3= document.getElementById("x3").value;
     y3= document.getElementById("y3").value;
      n3= document.getElementById("n3").value;
      
      //grafica 1
      var xgrafica1=n1/x1;
       var ygrafica1=n1/y1;
       
       //grafica 2
       
       var xgrafica2=n2/x2;
       var ygrafica2=n2/y2;
       
       //grafica 3
       var xgrafica3=n3/x3;
       var ygrafica3=n3/y3;
      
    alert(x1);
    
}