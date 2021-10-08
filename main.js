//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
//Infine scrivi sulla pagina nomecognomecolorepreferito21
//   (nome, congnome e colore preferito sono i dati inseriti dall'utente)

const userName = prompt("Come ti chiami?");
const lastName = prompt("Qual è il tuo cognome?");
const favColor = prompt("Qual è il tuo colore preferito?");
const fullName = userName + ' ' + lastName
console.log(fullName);

const Number_random = Math.floor(Math.random() * 101);
console.log(Number_random);

const pwgenerata = `${userName}${lastName}${favColor}${Number_random}`
console.log(pwgenerata);

document.getElementById("text").innerHTML = pwgenerata