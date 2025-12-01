let saldo = 50;
let bananeComprate = 0;
let meleComprate = 0;
let missioneBananeCompletata = false;
let missioneMeleCompletata = false;

function compra(prodotto) {
  if (prodotto === 'banana') {
    if (saldo >= 2) {
      saldo -= 2;
      bananeComprate += 1;
      aggiornaSaldo();
      alert('Hai comprato la banana! Totale: ' + bananeComprate);

      // Missione banane
      if (bananeComprate >= 5 && !missioneBananeCompletata) {
        saldo += 20;
        missioneBananeCompletata = true;
        aggiornaSaldo();
        alert('🎉 Missione banane completata! +20 BIT');
      }
    } else {
      alert('Non hai abbastanza BIT per la banana!');
    }

  } else if (prodotto === 'mela') {
    if (saldo >= 10) {
      saldo -= 10;
      meleComprate += 1;
      aggiornaSaldo();
      alert('Hai comprato la mela! Totale: ' + meleComprate);

      // Missione mele
      if (meleComprate >= 6 && !missioneMeleCompletata) {
        saldo += 100;
        missioneMeleCompletata = true;
        aggiornaSaldo();
        alert('🎉 Missione mele completata! +100 BIT');
      }
    } else {
      alert('Non hai abbastanza BIT per la mela!');
    }
  }
}

function aggiornaSaldo() {
  document.getElementById('saldo').textContent = saldo;
}