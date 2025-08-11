// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let lista = [];
//let entrada = document.getElementById('amigo');
//let texto = entrada.value;


function agregarAmigo() {
    let entrada = document.getElementById('amigo');
    let texto = entrada.value.trim();

    if (texto.length === 0) {
        alert('Por favor, inserte un nombre.');
        return;
    } else {
        lista.push(texto);
        recorrerArray();

        entrada.value = "";   //Limpio el campo
        entrada.focus({ preventScroll: true });  //Devuelve el enfoque sin mover el scroll
        console.log(lista);
    }
}

function recorrerArray() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; //Limpiar la lista

    for (const nombre of lista) {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    }

} 

function sortearAmigo() {
    if (lista.length === 0) {
        alert("No hay nombres para sortear.")
        return;
}   const i = Math.floor(Math.random() * lista.length);
    console.log("Indice Aleatorio:", i)

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = lista[i];

}
