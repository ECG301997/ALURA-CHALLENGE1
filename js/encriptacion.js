/*

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"


*/
const encriptar = (texto)=>{
    texto = texto.replace(' ','/');
    let arr =[];
    console.log(arr)
    for(let i = 0;i<texto.length;i++){
            arr.push(texto[i]);
        }
    for(let i = 0;i<arr.length;i++){
        if(arr[i]=='a'){
            arr[i] = 'ai';
        }else if (arr[i]=='e'){
            arr[i] = 'enter';
        }else if (arr[i]=='i'){
            arr[i] = 'imes';
        }else if (arr[i]=='o'){
            arr[i] = 'ober';
        }else if(arr[i] =='u'){
            arr[i] = 'ufat';
        }
    }
    let textoEncriptado = arr.toString();
    textoEncriptado = textoEncriptado.replace(/,/g,'');
    textoEncriptado = textoEncriptado.replace('/',' ');
    return textoEncriptado;
}
console.log(encriptar('hola como estas'))

/*var textoEncriptar = "hola como estas"

var textoEncriptado2 = textoEncriptar.replace(/[aeiou]/g, function (match) {
  if (match === "a") return "ai"
  if (match === "e") return "enter"
  if (match === "i") return "imes"
  if (match === "o") return "ober"
  if (match === "u") return "ufat"
})

console.log(textoEncriptado2)*/