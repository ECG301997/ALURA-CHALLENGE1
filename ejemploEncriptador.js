

const colorwhite = "rgb(222, 228, 250)"
const colorblue = "rgba(10, 56, 113, 1)"
let data = 1;

const encryptContent = () => {
    const decryptVar = document.querySelector(`.btn-decrypt`);
    const encryptVar = document.querySelector(`.btn-encrypt`);
    data = 1;
    encryptVar.style.backgroundColor = colorblue;
    encryptVar.style.color = colorwhite;
    encryptVar.value = "Encriptando..."


    decryptVar.style.backgroundColor = colorwhite;
    decryptVar.style.color = colorblue;
    decryptVar.value = "Desencriptar"

    const comprobation = document.querySelector(`.textToProcessed`);
    if (comprobation.value.length>0) {
        encrypt(comprobation.value);
    }


}

const decryptContent = () => {
    const decryptVar = document.querySelector(`.btn-decrypt`);
    const encryptVar = document.querySelector(`.btn-encrypt`);

    data = 2;


    encryptVar.style.backgroundColor = colorwhite;
    encryptVar.style.color = colorblue;
    encryptVar.value = "Encriptar"

    decryptVar.style.backgroundColor = colorblue;
    decryptVar.style.color = colorwhite;
    decryptVar.value = "Desencriptando..."


    const comprobation = document.querySelector(`.textToProcessed`);
    if (comprobation.value.length>0) {
        decrypt(comprobation.value);
    }

}

const encrypt = (value) => {
    const textArea = document.querySelector(`.processedText-textarea`);
    let encriptador = [/e/gi,/i/gi,/a/gi,/o/gi,/u/gi];
    let palabrasclave = ["enter","imes","ai","ober","ufat"];
    let newstr = value;
    for (let i = 0; i < palabrasclave.length; i++) {
        newstr = newstr.replace(encriptador[i], palabrasclave[i]);
    }
    textArea.value = newstr;

}

const decrypt = (value) => {
    const textArea = document.querySelector(`.processedText-textarea`);
    
    let palabrasclave = [/enter/g,/imes/g,/ai/g,/ober/g,/ufat/g];
    let desencriptador = ["e","i","a","o","u"];
    let newstr = value;
    for (let i = 0; i < palabrasclave.length; i++) {
        newstr = newstr.replace(palabrasclave[i],desencriptador[i]);
    }
    textArea.value = newstr;
}



const keyPressEvent = (e) => {

    if (e.keyCode === 32 || e.keyCode === 13) {
        if (data === 1) {
            encryptContent();
        } else {
            decryptContent();
        }
    }

}


const mainFunctional = () => {

    const comprobation = document.querySelector(`.textToProcessed`);
    comprobation.addEventListener('keypress', keyPressEvent);

    const encryptVar = document.querySelector(`.btn-encrypt`);
    const decryptVar = document.querySelector(`.btn-decrypt`);
    encryptVar.addEventListener('click', encryptContent);
    decryptVar.addEventListener('click', decryptContent);

}
mainFunctional();


// const encriptar = () => {
//   texto = text.value
//   let arr = [];
//   for (let i = 0; i < texto.length; i++) {
//     arr.push(texto[i]);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 'a') {
//       arr[i] = 'ai';
//     } else if (arr[i] == 'e') {
//       arr[i] = 'enter';
//     } else if (arr[i] == 'i') {
//       arr[i] = 'imes';
//     } else if (arr[i] == 'o') {
//       arr[i] = 'ober';
//     } else if (arr[i] == 'u') {
//       arr[i] = 'ufat';
//     }
//   }
//   let textoEncriptado = arr.toString();
//   textoEncriptado = textoEncriptado.replace(/,/g, '');
//   // textoEncriptado = textoEncriptado.replace('/', ' ');
//   console.log(textoEncriptado);
//   document.getElementById('resultado').innerText = textoEncriptado;
// }
