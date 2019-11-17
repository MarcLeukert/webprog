class Fahrt {
  constructor(fahrtID, fahrerID, mitfahrerIDs, von, nach, preis, dist, verb, datum, notiz) {

    this.fahrtID = fahrtID;
    this.fahrerID = fahrerID;
    this.mitfahrerIDs = mitfahrerIDs;
    this.von = von;
    this.nach = nach;
    this.dist = dist;
    this.preisProL = preis;
    this.verb = verb;
    this.datum = datum;
    this.notiz = notiz;
    this.preis = this.kostenBerechen();

    this.forderungen = this.forderungErstellen();
    this.verbindlichkeiten = this.verbindlichkeitErstellen();
    // this.forderung = new Forderung     wie solls weiter gehen
    this.forderungHinzufuegen(this.fahrerID, this.preis);
    this.verbindlichkeitHinzufuegen(this.mitfahrerIDs, this.preis);


    // if(Fahrt.allInstances == 'undefined' || Fahrt.allInstances == null){
    //   Fahrt.allInstances = [];
    // }
    //
    // Fahrt.allInstances.push(this);

    this.writeTripData(this.fahrtID, this.fahrerID, this.mitfahrerIDs, this.von, this.nach, this.preis, this.dist, this.verb, this.datum, this.notiz);
  }

  kostenBerechen() {
    let kostenProPerson = 0;
    let gesamtKosten = this.verb * this.dist * this.preisProL;
    gesamtKosten = gesamtKosten / 100;
    kostenProPerson = gesamtKosten / (this.mitfahrerIDs.length + 1);

    parseFloat(kostenProPerson);
    return kostenProPerson.toFixed(2);
  }

  forderungErstellen() {
    let neueForderung = [];
    /*if (this.forderungsID == 'undefined' || this.forderungsID == null) {
      this.forderungsID = 1000;
    } */
    for (i = 0; i < this.mitfahrerIDs.length; i++) {

      neueForderung[i] = new Forderung(this.fahrerID, this.mitfahrerIDs[i], this.fahrtID, this.preis);
      //this.forderungsID = this.forderungsID + 1;
    }
    return neueForderung;
  }

  verbindlichkeitErstellen() {
    let neueVerbindlichkeit = [];
    /*  if (this.verbindlichkeitsID == 'undefined' || this.verbindlichkeitsID == null) {
        this.verbindlichkeitsID = 2000;
      }*/
    for (i = 0; i < this.mitfahrerIDs.length; i++) {

      let array = [];
      array = new Verbindlichkeit(this.fahrerID, this.mitfahrerIDs[i], this.fahrtID, this.preis);

      neueVerbindlichkeit[i] = array;
      //this.verbindlichkeitsID = this.verbindlichkeitsID + 1;
    }
    return neueVerbindlichkeit;
  }

  forderungHinzufuegen(fahrerID, wert) {
    let x = 0,
      j = 0;
    let len = this.forderungen.length;
    for (x; x < len; x++) {
      j = 0;
      for (j; j < Object.entries(User.allInstances).length; j++) {
        let userID = Object.entries(User.allInstances)[j][1].userID;
        let vorname = Object.entries(User.allInstances)[j][1].vorname;
        let nachname = Object.entries(User.allInstances)[j][1].nachname;
        // let amountForderungen = Object.entries(User.allInstances)[j][1].amountForderungen;
        // let amountVerbindlichkeiten = Object.entries(User.allInstances)[j][1].amountVerbindlichkeiten;
        let sumForderungen = Object.entries(User.allInstances)[j][1].sumForderungen;
        let sumVerbindlichkeiten = Object.entries(User.allInstances)[j][1].sumVerbindlichkeiten;

        if (fahrerID == userID) {
          sumForderungen = sumForderungen + wert;
          // löscht null, die standardmäsig in der Datenbanmk steht
          while(sumForderungen.charAt(0) == 0 ){
            sumForderungen = sumForderungen.substr(1);
          }
          this.writeUserData(userID, vorname, nachname,
            // amountForderungen, amountVerbindlichkeiten,
            sumForderungen, sumVerbindlichkeiten);
        }
      }
    }
  }

  verbindlichkeitHinzufuegen(mitfahrerIDs, wert) {
    let j = 0,
      x = 0,
      z = 0;
    for (z; z < mitfahrerIDs.length; z++) {

      j = 0;
      for (j; j < Object.entries(User.allInstances).length; j++) {
        let userID = Object.entries(User.allInstances)[j][1].userID;
        let vorname = Object.entries(User.allInstances)[j][1].vorname;
        let nachname = Object.entries(User.allInstances)[j][1].nachname;
        // let amountForderungen = Object.entries(User.allInstances)[j][1].amountForderungen;
        // let amountVerbindlichkeiten = Object.entries(User.allInstances)[j][1].amountVerbindlichkeiten;
        let sumForderungen = Object.entries(User.allInstances)[j][1].sumForderungen;
        let sumVerbindlichkeiten = Object.entries(User.allInstances)[j][1].sumVerbindlichkeiten;

        if (mitfahrerIDs[z] == userID) {
          sumVerbindlichkeiten = sumVerbindlichkeiten + wert;
          // löscht null, die standardmäsig in der Datenbanmk steht
          while(sumVerbindlichkeiten.charAt(0) == 0 ){
            sumVerbindlichkeiten = sumVerbindlichkeiten.substr(1);
          }

          this.writeUserData(userID, vorname, nachname,
            // amountForderungen, amountVerbindlichkeiten,
            sumForderungen, sumVerbindlichkeiten);
        }
      }
    }
  }

  writeUserData(userID, vorname, nachname,
    // amountForderungen, amountVerbindlichkeiten,
    sumForderungen, sumVerbindlichkeiten) {
    firebase.database().ref('users/' + userID).set({
      userID: userID,
      vorname: vorname,
      nachname: nachname,
      // amountForderungen: amountForderungen,
      // amountVerbindlichkeiten: amountVerbindlichkeiten,
      sumForderungen: sumForderungen,
      sumVerbindlichkeiten: sumVerbindlichkeiten
    });
  }


  //
  // forderungHinzufuegen() {
  //   let instances = User.allInstances;
  //   let j = 0;
  //   for (j; j < instances.length; j++) {
  //     if (instances[j].userID == this.fahrerID)
  //       instances[j].amountForderungen = this.forderungen;
  //       instances[j].updateSumForderungen();
  //   }
  // }
  /*

    verbindlichkeitHinzufuegen() {
      let instances = Object.entries(User.allInstances)[1];
      let j = 0, help,
        i = 0;
      for (j; j < instances.length; j++) {
        i = 0;
        for (i; i < this.mitfahrerIDs.length;i++) {
          if (instances[j].userID == this.mitfahrerIDs[i]) {
            help = this.verbindlichkeiten[i];
            instances[j].amountVerbindlichkeiten.push(this.verbindlichkeiten[i]);
            instances[j].updateSumVerbindlichkeiten();
          }
        }
      }
    }

    */
  writeTripData(fahrtID, fahrerID, mitfahrerIDs, von, nach, preis, dist, verb, datum, notiz) {
    firebase.database().ref('trips/' + fahrtID).set({
      fahrtID: fahrtID,
      fahrerID: fahrerID,
      mitfahrerIDs: Object.values(mitfahrerIDs),
      von: von,
      nach: nach,
      preis: preis,
      dist: dist,
      verb: verb,
      datum: datum,
      notiz: notiz
    });
  }
}
