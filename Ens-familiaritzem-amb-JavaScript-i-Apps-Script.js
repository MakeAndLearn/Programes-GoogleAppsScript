function myFunction() {
  Logger.log("Hello World!")
  Logger.log("Aquesta frase té \n un salt de línia")
  Logger.log(1)
  Logger.log('C')
  Logger.log(true)
  Logger.log("Hola! Avui és el dia "+"1")
  Logger.log("Hola! Avui és el dia "+1)
  
  //Això és un comentari d'una línia
  /* La barra asterisc indiquen l'inici del comentari
    Això és un comentari 
    de més d'una línia 
    L'asterisc barra ens indica el final del comentari
  */

  //APARTAT DE VARIABLES
 
  // Declaració d'una variable numèrica
  let num = 42;

  // Llegir el valor de la variable
  console.log(num); // Mostra 42 per la consola

  // Declaració d'una variable de tipus text (String)
  let text = "Hola, món!";

  // Llegir el valor de la variable
  console.log(text); // Mostra "Hola, món!" per la consola
    
  // Declaració d'una variable booleana
  let cert = true;
  let fals = false;

  // Llegir el valor de les variables
  console.log(cert); // Mostra true per la consola
  console.log(fals); // Mostra false per la consola
  
  // Declaració d'una variable tipus taula (array)
  let numbers = [1, 2, 3];
  let fruits = ["poma", "pera", "banana"];

  // Llegir els valors de l'array
  console.log(numbers); // Mostra [1, 2, 3] per la consola
  console.log(fruits); // Mostra ["poma", "pera", "banana"] per la consola
    
  // Declaració d'una variable tipus objecte
  let persona = {nom: "John", edat: 30};

  // Llegir valors de l'objecte
  console.log(persona.nom); // Mostra "John" per la consola
  console.log(persona.edat); // Mostra 30 per la consola
  
  // Declaració d'una variable amb valor null
  let nul = null;

  // Llegir el valor de la variable
  console.log(nul); // Mostra null per la consola

  // Declaració d'una variable sense valor assignat
  let indefinit;

  // Llegir el valor de la variable
  console.log(indefinit); // Mostra undefined per la consola
    
  // Declaració d'una variable de tipus BigInt (Gran enter)
  const granNumero = 1234567890123456789012345678901234567890;

  // Llegir el valor del BigInt
  console.log(granNumero); // Mostra 1234567890123456789012345678901234567890 per la consola

  // Generador de números aleatoris
  let numAleatori = Math.random(); // Genera un número decimal aleatori entre 0 (inclòs) i 1 (exclòs)
  console.log(numAleatori);
  let moneda = Math.round(numAleatori); // Converteix en enter el número decimal aleatori, perquè sigui com una moneda a l'aire
  console.log(moneda);
  // Genera un número aleatori dins d'un rang establert
  let max = 10;
  let min = 1;
  let numAleatoriRang = Math.floor(Math.random() * (max - min)) + min;
  console.log(numAleatoriRang);

  // Exemple de condicional
  let edat = 18;

  if (edat >= 18) {                 // Si edat és igual o més gran a 18
    console.log("És major d'edat"); // Mostra aquesta frase per la consola
  } else {
    console.log("No és major d'edat"); // I si no mostra aquesta altra frase per la consola
  }

  // Exemple de switch...case
  // Assignem el valor 2, per exemple, a la variable 'dia'
  const dia = 2;

  // Iniciem l'estructura 'switch...case' basada en el valor de 'dia'
  switch (dia) {
    case 1:
      // Si 'dia' és 1, mostra aquest missatge
      console.log("És dilluns. Ànims!"); 
      break;
    case 2:
      // Si 'dia' és 2, mostra aquest missatge
      console.log("És dimarts. Seguim treballant."); 
      break;
    case 3:
      // Si 'dia' és 3, mostra aquest missatge
      console.log("És dimecres. Ja estem a la meitat de la setmana."); 
      break;
    case 4:
      // Si 'dia' és 4, mostra aquest missatge
      console.log("És dijous. Gairebé és divendres!"); 
      break;
    case 5:
      // Si 'dia' és 5, mostra aquest missatge
      console.log("És divendres. Cap de setmana a la vista!"); 
      break;
    case 6:
      // Si 'dia' és 6, mostra aquest missatge
      console.log("És dissabte. Gaudeix del teu dia lliure!"); 
      break;
    case 7:
      // Si 'dia' és 7, mostra aquest missatge
      console.log("És diumenge. Relaxa't i descansa."); 
      break;
    default:
      // Si 'dia' no coincideix amb cap cas, mostra aquest missatge
      console.log("Dia no vàlid."); 
  }

  // Exemple de bucle while
  let contador = 0;

  while (contador < 5) {  // Mentre contador sigui menor de 5
    // Mostrar paraula i el valor de la variable contador
    console.log("Iteració " + contador);
    contador++;   // Augmentar el valor del contador +1
  } // El bucle s'acaba quan la condició deixa de ser certa (True)

  //Exemple de bucle for
  // Es crea la variable i amb el valor inicial, en aquest cas 0
  // Es marca la condició per seguir amb el bucle "i més petita a 5"
  // Per cada volta de bucle, i augmenta el seu valor +1
  for (let i = 0; i < 5; i++) {
    // Mostrar paraula i el valor de la variable i
    console.log("Iteració " + i); 
  } // El bucle s'acaba quan la condició deixa de ser certa (True)
  
  // Saber si un número és parell o senar
  // Assignem el valor 4, per exemple, a la variable 'num'
  const nombre = 4
 
  // L'operador "%" ens dona el residu de la divisió entre els dos valors
  if ((nombre%2) == 0) {  // Si el residu és igual a 0
    console.log("El nombre "+ nombre+" és parell.\n") // El nombre és parell
  } else {
    // Si no és 0, per tant el residu és 1, el nombre és imparell
    console.log("El nombre "+ nombre +" és imparell.\n") 
  }

  // Declaració d'una funció anomenada "saludar"
  function saludar() {
    console.log("Hola, món!");
  }

  // Cridar la funció creada que mostra "Hola, món!" per la consola
  saludar();

  // Declaració d'una funció que accepta dos paràmetres
  function suma(a, b) { // Cal assignar un valor a cada paràmetre
    return a + b;
  }

  // Cridar la funció "suma()" i emmagatzemar el resultat en una variable nova
  let resultat = suma(5, 3);

  console.log(resultat); // Mostrar el valor de la variable per la consola
}
