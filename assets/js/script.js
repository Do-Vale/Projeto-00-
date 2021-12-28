
const diminuir$ = document.getElementById('diminuir');
const aumentar$ = document.getElementById('aumentar');
const p$ = document.getElementById('currentNumber') ;

let contador = 0;
p$.innerHTML = contador;


aumentar$.addEventListener('click', function () {
   
    /* console.log("clicou") */
    p$.innerHTML = ++contador;
    if (contador>=0) {
        document.getElementById("diminuir").disabled=false;
    }
    if (contador>-1) {
        document.getElementById("currentNumber").style.color="black";
    }   
})

diminuir$.addEventListener('click', function () {
   
    /* console.log("clicou") */
    p$.innerHTML = --contador;
    if (contador<-5) {        
        document.getElementById("diminuir").disabled=true;
        /* document.getElementById("diminuir").style.backgroundColor="lightgray"; */ 
        
    }
    if (contador<0) {
        document.getElementById("currentNumber").style.color="red";
    }    
})


/* 
function increment() {
	currentNumber = currentNumber +1 ;
    currentNumberwrapper.innerHTML = currentNumber;
}

function decrement() {
	currentNumber = currentNumber -1 ;
    currentNumberwrapper.innerHTML = currentNumber;    
   
} */


/* Tente implementar os eventos usando o método addEventListener.
Crie condicionais que desabilitam o botão de incrementar ou decrementar quando count chegar a um determinado valor 
(ex.: 0 <= count =< 10).
Mude a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo. 

 */