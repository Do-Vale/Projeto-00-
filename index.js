function myFunction() {
  document.getElementById("email2").value = document.getElementById("email1").value;
  document.getElementById("password2").value = document.getElementById("password1").value;
  document.getElementById("email1").value = "";
  document.getElementById("password1").value = ""; 
  document.getElementById("emailHelp").style.visibility = "hidden";
  document.getElementById("myBtn").disabled = true;
  document.getElementById("demo").innerHTML = " Vazooou!";  
 }


/* Remover o elemento selecionado do documento
var myobj = document.getElementById("demo");
myobj.remove();


function changeVisibility() {
  document.getElementById("emailHelp").style.visibility = "hidden";


           FUNÇÃO PARA RESETAR 

  COLOCAR NA DIV : <button onclick="resetElement()">Reset All</button>

  function resetElement() {
  document.getElementById("imgbox1").style.display = "block";
  document.getElementById("imgbox2").style.visibility = "visible";
}  
  https://www.w3schools.com/css/tryit.asp?filename=trycss_display

  */