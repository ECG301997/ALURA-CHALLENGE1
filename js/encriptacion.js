/*

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"


*/
const encriptar = (texto)=>{
        if(texto.includes('e')){
            texto =texto.replace('e','enter');
        }
        if(texto.includes('i')){
            texto = texto.replace('i','imes');
        } 
        if(texto.includes('o')){
            texto = texto.replace('o','ober')
        }
        if(texto.includes('a')){
            texto = texto.replace('a','aio');
        }
        if(texto.includes('u')){
            texto = texto.replace('u','ufat');
        }
        return texto;
           
}

console.log(encriptar('hola'))