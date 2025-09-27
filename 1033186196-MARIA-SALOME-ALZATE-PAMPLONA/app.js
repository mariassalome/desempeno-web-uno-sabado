let nombreMascota = prompt("Bienvenido! Por favor dale un nombre a tu mascota virtual:");
let nivelHambre = 50; 
let nivelFelicidad = 50; 


function mostrarEstado() {
  console.log(`Mascota: ${nombreMascota}, Hambre: ${nivelHambre}/100, Felicidad: ${nivelFelicidad}/100.`);
}
mostrarEstado();