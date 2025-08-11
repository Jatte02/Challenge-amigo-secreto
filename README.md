# Challenge-amigo-secreto

# Sorteo de Amigos

Este proyecto es una aplicación web simple en JavaScript para agregar nombres a una lista y seleccionar uno de forma aleatoria. Ideal para juegos como "Amigo Secreto" o sorteos simples.

## Características
- Agregar amigos a una lista.
- Mostrar la lista en pantalla.
- Seleccionar un amigo de forma aleatoria.
- Validaciones para evitar entradas vacías.
- Interfaz actualizada dinámicamente.

## Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)

## Estructura del proyecto
 proyecto-sorteo
┣ 📜 index.html
┣ 📜 style.css
┣ 📜 script.js
┗ 📜 README.md


## Funciones principales

### `agregarAmigo()`
- Valida que el campo de entrada no esté vacío.
- Agrega el nombre al arreglo global `lista`.
- Limpia el campo y devuelve el foco.
- Actualiza la lista mostrada en la página.

### `recorrerArray()`
- Limpia la lista HTML existente.
- Recorre el arreglo `lista` y crea un `<li>` por cada nombre.
- Agrega los `<li>` al elemento `<ul>` de la página.

### `sortearAmigo()`
- Verifica que haya nombres en la lista.
- Genera un índice aleatorio usando:
  ```js
  Math.floor(Math.random() * lista.length)
