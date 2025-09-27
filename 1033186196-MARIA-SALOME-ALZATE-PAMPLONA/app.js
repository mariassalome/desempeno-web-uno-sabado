let nombreMascota = prompt("Bienvenido! Por favor dale un nombre a tu mascota virtual:");
let nivelHambre = 50; 
let nivelFelicidad = 50; 


function mostrarEstado() {
  console.log(`Mascota: ${nombreMascota}, Hambre: ${nivelHambre}/100, Felicidad: ${nivelFelicidad}/100.`);
}
mostrarEstado();


const alimentar = function(puntosComida) {
  nivelHambre -= puntosComida;

  if (nivelHambre < 0) {
    nivelHambre = 0;
  }
  console.log(`Ñam! El hambre de ${nombreMascota} ha disminuido. Hambre: ${nivelHambre}/100.`);
};


const jugar = (puntosDiversion) => {
  nivelFelicidad += puntosDiversion;
  
  if (nivelFelicidad > 100) {
    nivelFelicidad = 100;
  }
  console.log(`Que divertido! La felicidad de ${nombreMascota} ha aumentado. Felicidad: ${nivelFelicidad}/100.`);
};
 
alimentar(5); 
jugar(40);

mostrarEstado()