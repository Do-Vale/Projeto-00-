function myFunction() {
  document.getElementById("email2").value = document.getElementById("email1").value;
  document.getElementById("password2").value = document.getElementById("password1").value;
  document.getElementById("email1").value = "Clique em recomeçar!";
  document.getElementById("password1").value = "Clique em recomeçar!"; 
  document.getElementById("emailHelp").style.visibility = "hidden";
  document.getElementById("myBtn").style.visibility = "hidden";
  document.getElementById("demo").innerHTML = "Vazooou!";
  document.getElementById("myBtn2").style.display = "block"; 
  document.getElementById("email1").disabled = true;
  document.getElementById("password1").disabled = true;
}

 function resetarDiv() {
  document.getElementById("email1").value = "";
  document.getElementById("email2").value = "";
  document.getElementById("password1").value = "";
  document.getElementById("password2").value = "";
  document.getElementById("myBtn2").style.display = "none";
  document.getElementById("myBtn").style.visibility = "visible";
  document.getElementById("demo").innerHTML = " ";
  document.getElementById("emailHelp").style.visibility = "visible";
  document.getElementById("email1").disabled = false;
  document.getElementById("password1").disabled = false;
}

/* Remover o elemento selecionado do documento
var myobj = document.getElementById("demo");
myobj.remove();

Alterar o DISPLAY para block
document.getElementById("myBtn2").style.display = "block";
document.getElementById('idDoBotao').style.display = 'none';
document.getElementById('idDoBotao').style.display = 'inline';


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