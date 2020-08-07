import validator from './validator.js';

console.log(validator);
  
let btnValidar = document.getElementById("btnValidar");
    btnValidar.addEventListener("click", function (event) {
        event.preventDefault();

        let numeroTarjeta = document.getElementById("numeroTarjeta").value;
      
        let verificar = validator.isValid(numeroTarjeta);
        let ocultar = validator.maskify(numeroTarjeta);
           
        
        let divG=document.getElementById("validar");
        if  (verificar === true) {
            const show = "La tarjeta es VÁLIDA";

            divG.innerHTML= show;
        } else{
              divG.innerHTML="La tarjeta es INVÁLIDA";
        }
         

        let divS=document.getElementById("ocultar");
        divS.innerHTML=ocultar;
        

    });   

    // function suma(parametro){
    //   return valorDeRetorno
    // }

    // suma(argumento)

