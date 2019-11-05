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

  }

  kostenBerechen() {
    let kostenProPerson = 0;
    let gesamtKosten = this.verb * this.dist;
    kostenProPerson = gesamtKosten / (this.mitfahrerIDs.length + 1);

    return kostenProPerson;
  }

  forderungErstellen() {
    let neueForderung = [];
    if (this.forderungsID == 'undefined' || this.forderungsID == null) {
      this.forderungsID = 1000;
    }
    for (i = 0; i < this.mitfahrerIDs.length; i++) {

      neueForderung[i] = new Forderung(this.forderungsID, this.fahrerID, this.mitfahrerIDs[i], this.fahrtID, this.preis);
      this.forderungsID = this.forderungsID + 1;
    }
    return neueForderung;
  }

  verbindlichkeitErstellen() {
    let neueVerbindlichkeit = [];
    if (this.verbindlichkeitsID == 'undefined' || this.verbindlichkeitsID == null) {
      this.verbindlichkeitsID = 2000;
    }
    for (i = 0; i < this.mitfahrerIDs.length; i++) {

      neueVerbindlichkeit[i] = new Verbindlichkeit(this.verbindlichkeitsID, this.mitfahrerIDs[i], this.fahrerID, this.fahrtID, this.preis);
      this.verbindlichkeitsID = this.verbindlichkeitsID + 1;
    }
    return neueVerbindlichkeit;
  }

  forderungHinzufuegen() {
    let instances = User.allInstances;
    let j = 0;
    for (j; j < instances.length; j++) {
      if (instances[j].userID == this.fahrerID)
        instances[j].amountForderungen = this.forderungen;
    }
  }
  verbindlichkeitHinzufuegen() {
    let instances = User.allInstances;
    let j = 0,
      i = 0;
    for (j; j < instances.length; j++) {
      for (i; i < mitfahrerIDs.length;i++) {
        if (instances[j].userID == this.mitfahrerIDs[i]) {
          instances[j].amountForderungen = this.forderungen;
        }
      }
    }
  }
}
