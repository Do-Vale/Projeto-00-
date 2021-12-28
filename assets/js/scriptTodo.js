var desejo$ = document.getElementById("inptText").value 

/* function myFunction() {
    document.getElementById("list").innerHTML = document.getElementById("inptText").value;
} */

function myFunction() {
    var para = document.createElement("P");
    para.innerHTML = "desejo$" ;
    document.getElementById("myDiv").appendChild(para);
  }