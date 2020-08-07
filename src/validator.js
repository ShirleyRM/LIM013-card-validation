const validator = {
  isValid:
    function (numeroTarjeta) {
      let creditCardNumber = numeroTarjeta.split("");
      console.log(creditCardNumber);

      let numeroReverse = creditCardNumber.reverse();
      console.log(numeroReverse);

      let suma = 0;
      for (let i = 0; i < numeroReverse.length; i++) {
        let numeroPar = parseInt(numeroReverse[i]);
        
        if ((i % 2) != 0) {
            numeroPar *= 2;
          if (numeroPar > 9) {
              numeroPar -= 9;
          }
          
       
        }
        suma += numeroPar;
     
      }
      console.log(suma);

        if (suma % 10 == 0)

        {    
        return true;
        }
      else{
        return false;
       }
      
      },

  maskify:(numeroTarjeta)=>{
        let card = "";
          for (let i = 0; i < numeroTarjeta.length; i++) {
            if (i <= numeroTarjeta.length - 5) {
              card = card + "#";
              
            } else {
              card = card + numeroTarjeta [i]
            }
          }
          console.log(card);
          return card  
      
      }
    };  
      export default validator;