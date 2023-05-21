
// JavaScript Document
// Function "lanzar"
function lanzar (){
	var dado1=Math.floor((Math.random()*6)+1); /*con el method Math.random obtenemos los numeros al azar*/
	var dado2=Math.floor((Math.random()*6)+1); /*que se almacenan en variables 'dado1', 'dado2'*/

	var d1=document.getElementById("dado1"); /*declaramos variables 'd1', 'd2' para obtener las*/
	var d2=document.getElementById("dado2"); /*imagenes en documento HTML mediante document.getElementById*/

	d1.src=dado1+".png"; /*asignamos la ruta de la imagen correspondiente a elementos <img> */
	d2.src=dado2+".png";/*utilizando variables 'dado1' y 'dado2', los nombres de las imgs se*/
									/*asumen con la ext .png */
}

// la función lanzar() genera dos números aleatorios entre 1 y 6, y
// luego cambia la imagen mostrada en los elementos <img> con los IDs "dado1" y "dado2" en la página web,
// mostrando imágenes diferentes de dados en cada lanzamiento.