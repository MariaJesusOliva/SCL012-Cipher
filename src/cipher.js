window.cipher = {
  encode: (offSetNumb, text1) => {
    let resultado = "";
    let size = text1.length;
    for (let i=0; i< size; i++) {
      let stepOne = text1.toLocaleUpperCase();
      let numLett = stepOne.charCodeAt(i);
      if (numLett >=65 && numLett <=90) {
        let addOff = (numLett - 65 + offSetNumb) % 26 + 65
        let enCode = String.fromCharCode(addOff);

        resultado += enCode
      }
      else {
        resultado += String.fromCharCode(numLett);
      }
    }
    return resultado;
    },
  decode: (offSetNumb, text1) => {
    let resultado = "";
    let size = text1.length;
    for (let i=0; i< size; i++) {
      let stepOne = text1.toLocaleUpperCase();
      let numLett = stepOne.charCodeAt(i);
      if (numLett >=65 && numLett <=90) {
        let addOff = (numLett + 65 - offSetNumb) % 26 + 65
        let deCode = String.fromCharCode(addOff);

        resultado += deCode
      }
      else {
        resultado += String.fromCharCode(numLett);
      }
    }
    return resultado;
  }
};