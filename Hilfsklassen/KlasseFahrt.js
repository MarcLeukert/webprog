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
    this.forderungHinzufuegen();
    this.verbindlichkeitHinzufuegen();


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
    gesamtKosten = gesamtKosten /100;
    kostenProPerson = gesamtKosten / (this.mitfahrerIDs.length + 1);

    return kostenProPerson;
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
      array = new Verbindlichkeit( this.fahrerID, this.mitfahrerIDs[i], this.fahrtID, this.preis);

      neueVerbindlichkeit[i] = array;
      //this.verbindlichkeitsID = this.verbindlichkeitsID + 1;
    }
    return neueVerbindlichkeit;
  }

  forderungHinzufuegen() {
    let instances = User.allInstances;
    let j = 0;
    for (j; j < instances.length; j++) {
      if (instances[j].userID == this.fahrerID)
        instances[j].amountForderungen = this.forderungen;
        instances[j].updateSumForderungen();
    }
  }
  verbindlichkeitHinzufuegen() {
    let instances = User.allInstances;
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
  writeTripData(fahrtID, fahrerID, mitfahrerIDs, von, nach, preis, dist, verb, datum, notiz){
    firebase.database().ref('trips/' + fahrtID).set({
      fahrtID : fahrtID,
      fahrerID : fahrerID,
      mitfahrerIDs : Object.values(mitfahrerIDs),
      von : von,
      nach: nach,
      preis : preis,
      dist: dist,
      verb: verb,
      datum: datum,
      notiz: notiz
      });
  }
}
