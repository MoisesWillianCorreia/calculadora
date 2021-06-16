var div = document.getElementById("q1");
var input = document.createElement("input");
var input2 = document.createElement("input");
var buttom = document.createElement("buttom");
var p = document.createElement("p");

input.setAttribute("id","valorMinimo");
input.setAttribute("type","number");
input2.setAttribute("id","valorMaximo");
input2.setAttribute("type","number");
buttom.setAttribute("id","buttom");
buttom.setAttribute("content","clique aqui");
p.setAttribute("id","resultado");
div.appendChild(input);
div.appendChild(input2);
div.appendChild(buttom);
div.appendChild(p);
buttom.addEventListener("click",multiplicar);

function multiplicar()
{
    console.log("entrou")
    // var imputMinimo = document.getElementById("valorMinimo");
    // var imputMaximo = document.getElementById("valorMaximo");
    var valorMinimo = document.getElementById("valorMinimo").value;
    var valorMaximo = document.getElementById("valorMaximo").value;
    var n1 = parseInt(valorMinimo)
    var n2 = parseInt(valorMaximo)
    console.log(n1);
    console.log(n2);
    for (let index = n1; index <= n2; index++) {
       if (index %2 == 0 && index %3 == 0 ) {
           console.log(index + " e multiplo de 2 e 3")
       }
    }
    
}
// function sortear()
// {
//     var min= imputMinimo.getElementById("minimo").value;
//     var max= imputMaximo.getElementById("maximo").value;
//     var sorteio = Math.floor(Math.random() * (max - min) + min);
//     document.getElementById("resultado").innerHTML = sorteio;
// }
