//ENCODE
const enButt = document.getElementById("cifrar");
//onclick save
enButt.addEventListener("click", function() {
    let text1 = document.getElementById("text1").value;
//save offset
    let offSet = document.getElementById("offSet").value;
// text2
    let text2 = document.getElementById("text2");
//offSet only in number
    const offSetNumb = parseInt(offSet);
//aplly enconde
    let resultado = window.cipher.encode(offSetNumb, text1);
//show result in text2
    text2.innerHTML = resultado
})
//DECODE
const deButt = document.getElementById("descifrar");
//onclick save
deButt.addEventListener("click", function() {
    let text1 = document.getElementById("text1").value;
//save offset
    let offSet = document.getElementById("offSet").value;
// text2
    let text2 = document.getElementById("text2");
//offSet only in number
    const offSetNumb = parseInt(offSet);
//aplly deconde
    let resultado = window.cipher.decode(offSetNumb, text1);
//show result in text2
    text2.innerHTML = resultado
})
//COPY
const copyButt = document.getElementById("copiar");
//onclick copy
copyButt.addEventListener("click", function() {
//select text to copy
    let textToCopy = document.getElementById("text2");
     textToCopy.select();
//copy text
    document.execCommand('Copy');
} )