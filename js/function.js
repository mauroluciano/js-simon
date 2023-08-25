// aggiungere alla variabile countDownDate la data di destinazione
let countDownDate = new Date("Aug 24, 2023 09:30:00").getTime();

// questa funzione fa partire il conteggio
let x = setInterval(function () {
  // la variabile now specifica l'orario attuale
  let now = new Date().getTime();

  // calcolo orario attuale ed orario di destinazione
  let distance = countDownDate - now;

  // calcolo di ore, minuti e secondi
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // inserisci il risultato nell'id time
  document.getElementById("time").innerHTML =
    hours + " ore " + minutes + " minuti " + seconds + " secondi ";
}, 1000);
