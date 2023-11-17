let nome = prompt("inserisci il tuo nome");
let cognome = prompt("inserisci il tuo cognome");
let colore = prompt("insrisci il tuo colore preferito");
// let text = nome + cognome + colore + 23;
document.getElementById("user").innerHTML = `${nome}${cognome}${colore}23`;