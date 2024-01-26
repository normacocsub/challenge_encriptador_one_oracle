const valores_encriptar = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const encriptar = () => {
    let textarea = document.getElementById('texto_textarea')
    let texto_resultado = document.getElementById('texto_resultado')
    validaciones_mensajes()
    if (textarea.value.trim() === "") return
    let texto = textarea.value;
    let texto_encriptado = "";
    for (let index = 0; index < texto.length; index++) {
        if (valores_encriptar[texto[index]] != null) {
            texto_encriptado += valores_encriptar[texto[index]]
            continue;
        }
        texto_encriptado += texto[index]
    }
    texto_resultado.textContent =texto_encriptado;
}

const validaciones_mensajes = () => {
    let textarea = document.getElementById('texto_textarea')
    let animation = document.getElementById('animation_section')
    let message_section = document.getElementById('message_section')
    let not_found_section = document.getElementById('not_found_message')
    animation.style.display = 'none';
    if (textarea.value.trim() === "") {
        message_section.style.display = 'none';
        not_found_section.style.display = 'flex';
        return
    }
    not_found_section.style.display = 'none';
    message_section.style.display = 'flex';
}

const copiar = () => {
    let texto_resultado = document.getElementById('texto_resultado')
    navigator.clipboard.writeText(texto_resultado.innerText)
    // mostrar notificacion de copiado o animacion en el boton 
}