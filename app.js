// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let entrada = document.getElementById('amigo');
let texto = entrada.value;


function agregarAmigo() {
    let entrada = document.getElementById('amigo');
    let texto = entrada.value.trim();

    if (texto.length === 0) {
        alert('Por favor, inserte un nombre.')
        return;
    } else {
        listaAmigos.push(texto);

        entrada.value = "";   //Limpio el campo
        entrada.focus({preventScroll: true})  //Devuelve el enfoque sin mover el scroll
        console.log(listaAmigos);
    }
}