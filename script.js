//e --> enter 
//o --> ober 
//i --> imes 
//a --> ai 
//u --> ufat 

function encriptar() {
        var texto = document.getElementById("mensaje").value.toLowerCase();

        var receptor = document.getElementById("mensaje2");
        var copiar = document.getElementById("mensaje2f");
        var imgDerecha = document.getElementById("imgDerecha");
    
        var textoCifrado = texto.replace(/e/igm,"enter");
        var textoCifrado = textoCifrado.replace(/o/igm,"ober");
        var textoCifrado = textoCifrado.replace(/i/igm,"imes");
        var textoCifrado = textoCifrado.replace(/a/igm,"ai");
        var textoCifrado = textoCifrado.replace(/u/igm,"ufat");
    
        imgDerecha.style.display = "none";
        receptor.value = textoCifrado;  
        copiar.style.display = "show";
        copiar.style.display = "inherit";
    }

function desencriptar() {
        var texto = document.getElementById("mensaje").value.toLowerCase();

        var receptor = document.getElementById("mensaje2");
        var copiar = document.getElementById("mensaje2f");
        var imgDerecha = document.getElementById("imgDerecha");

        var textoCifrado = texto.replace(/enter/igm,"e");
        var textoCifrado = textoCifrado.replace(/ober/igm,"o");
        var textoCifrado = textoCifrado.replace(/imes/igm,"i");
        var textoCifrado = textoCifrado.replace(/ai/igm,"a");
        var textoCifrado = textoCifrado.replace(/ufat/igm,"u");

        imgDerecha.style.display = "none";
        receptor.value = textoCifrado;
        copiar.style.display = "show";
        copiar.style.display = "inherit";
    }

    function copiar(){

        var receptor = document.getElementById("mensaje2");
        var copiar = document.getElementById("mensaje2f");
        var imgDerecha = document.getElementById("imgDerecha");
        var contenido = document.querySelector("#mensaje2");
    
        contenido.select();
        document.execCommand("cut");
    
    
        imgDerecha.style.display = "contents";
        copiar.style.display = "none";
    }

