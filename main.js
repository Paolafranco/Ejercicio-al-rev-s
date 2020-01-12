document.getElementById("inventir").addEventListener("click",function(){
    var frase=document.getElementById("inverFrase").value;
    var c=[];
    var res = frase.split(" ");
    if(frase.length<res.length){
        console.log("Error, ponga la frase correcta");
    }else{
    for(var k=res.length-1;k>=0;k--){
        c.push(res[k]+" ");
  }
  document.getElementById("mostrarFrase").innerHTML=c;
  console.log("Su frase es: "+c);
    }
    
  })
  