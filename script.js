const valores_encriptar = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const valores_desencriptar = [
    {valor_inicial: 'enter',valor:'e', find: false},
    {valor_inicial: 'imes',valor:'i', find: false},
    {valor_inicial: 'ai',valor: 'a', find: false},
    {valor_inicial: 'ober',valor: 'o', find: false},
    {valor_inicial: 'ufat',valor: 'u', find: false}
];

const desencriptar = () => {
    let textarea = document.getElementById('texto_textarea')
    let texto_resultado = document.getElementById('texto_resultado')
    validaciones_mensajes()
    if (textarea.value.trim() === "") return
    let texto = textarea.value;
    let texto_desencriptado_cicle = true;
    let contador = 0
    let valores = valores_desencriptar;
    while (texto_desencriptado_cicle) {
        if (valores.length <= contador) {
            texto_desencriptado_cicle = false
            break
        }
        let inicial = texto.indexOf(valores[contador].valor_inicial)
        if (inicial == -1) {
            contador += 1
            continue
        }
        let final = inicial + valores[contador].valor_inicial.length - 1;
        let texto_cortar = texto.slice(0, inicial) + valores[contador].valor + texto.slice(final + 1)
        texto = texto_cortar
    }
    texto_resultado.innerText = texto
}

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