let input = "";
//peremt de saisir dans la calculette
    function ShowValue(btn){  
    input += btn.value;
    
  
      console.log(input);
      document.getElementById("output").innerHTML = input;
    }
//Fait le calcul et envoie dans la calculette
function calculette(){
  console.log(eval(input));
       document.getElementById("output").innerHTML = eval(input);
}
//Reset
function Reset(btn){
   document.getElementById("output").innerHTML = "0";
  input = "";
}
//rem
function rem1(btn){
input= input.replace(input.slice(-1), "");
    console.log(input);
 document.getElementById("output").innerHTML = input;
}
