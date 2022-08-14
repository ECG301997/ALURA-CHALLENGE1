// obtener elementos del DOM
const text = document.getElementById('inicial');
const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const btnCopiar = document.getElementById('copiar');

// VENTANA MODAL

// Crear elementos con atributos e hijo
  const createCustomElement = (element, attributes, children) => {
    let customElement = document.createElement(element);
    if (children !== undefined) children.forEach(el => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
    addAttributes(customElement, attributes);
    return customElement;
  };

  // Añadir un objeto de atributos a un elemento
  const addAttributes = (element, attrObj) => {
    for (let attr in attrObj) {
      if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr])
    }
  };


  // imprimir modal

  const printModal = content => {
    // crear contenedor interno
    const modalContentEl = createCustomElement('div', {
      id: 'ed-modal-content',
      class: 'ed-modal-content'
    }, [content]),
      // crear contenedor principal
      modalContainerEl = createCustomElement('div', {
        id: 'ed-modal-container',
        class: 'ed-modal-container'
      }, [modalContentEl]);
    // imprimir el modal
    document.body.appendChild(modalContainerEl);

    // Remover el modal
    const removeModal = () =>
      document.body.removeChild(modalContainerEl);
    modalContainerEl.addEventListener('click', e => {
      if(e.target === modalContainerEl){
        removeModal();
      }
    })

  }
 
// ENCRIPTACION

// Validacion solo minusculas y que no esté vacio
function validarTexto() {
  let regxp = /^([a-z0-9\s\n]){1,}$/;
  if (text != regxp) {
    return (regxp.test(text.value));
  }
}


// encriptacion
const encriptar = () => {
    const textoEncriptado = text.value.replace(/[aeiou]/g, function (match) {
      if (match === "a") return "ai"
      if (match === "e") return "enter"
      if (match === "i") return "imes"
      if (match === "o") return "ober"
      if (match === "u") return "ufat"
    })
    document.getElementById('resultado').innerText = textoEncriptado;
    document.getElementById('inicial').value = "";
}


// desencriptar
const desencriptar = () => {

    let palabrasclave = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g];
    let desencriptador = ["e", "i", "a", "o", "u"];
    let textoEncriptado = text.value;
    for (let i = 0; i < textoEncriptado.length; i++) {
      textoEncriptado = textoEncriptado.replace(palabrasclave[i], desencriptador[i]);
    }
    const texto = textoEncriptado
    document.getElementById('resultado').innerHTML = texto;
    document.getElementById('inicial').value = "";
}

// validacion encriptacion
const encriptacion = () => { 
  const texto = validarTexto();
  if (texto) {
    encriptar();
  } else {
      printModal(`<img src='img/muneco.png'>`)
  }
}
// validacion desencriptacion
const desencriptacion = () => {
  const texto = validarTexto();
  if (texto) {
    desencriptar();
  } else {
    printModal(`<img src='img/muneco.png'>`)
  }
}

// Funcion para copiar   
 
const copiar = () =>{
  const resultado = document.getElementById('resultado');
  resultado.select()
  document.execCommand("copy")
  swal("Texto copiado","Texto copiado al portapapeles","success")
}

btnEncriptar.addEventListener('click',encriptacion);
btnDesencriptar.addEventListener('click',desencriptacion);
btnCopiar.addEventListener('click',copiar);