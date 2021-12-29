

/* function myFunction() {
    var para = document.createElement("label");
    var x = document.createElement("INPUT");
   
    x.setAttribute("type", "checkbox");
    document.getElementById("myDiv").appendChild(x);

    para.innerHTML = document.getElementById("inptText").value;
    document.getElementById("myDiv").appendChild(para);
    document.getElementById("inptText").value = ""
  } */

  function myFunction() {
            var myDiv = document.getElementById("myDiv");
            var demanda = document.getElementById("inptText").value
              
            // creating checkbox element
            var checkbox = document.createElement('input');
              
            // Assigning the attributes
            // to created checkbox
            checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = "value";
            checkbox.id = "id";
              
            // creating label for checkbox
            var label = document.createElement('label');
              
            // assigning attributes for 
            // the created label tag 
            label.htmlFor = "id";
              
            // appending the created text to 
            // the created label tag 
            label.appendChild(document.createTextNode(ddemanda));
              
            // appending the checkbox
            // and label to div
            myDiv.appendChild(checkbox);
            myDiv.appendChild(label);

            // zerar valor inpt
            document.getElementById("inptText").value = ""
        }