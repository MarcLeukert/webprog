class Fahrt {
  constructor(fahrtID, fahrerID, mitfahrerIDs, von, nach, preis, dist, verb, datum, notiz) {

    this.fahrtID = fahrtID;
    this.fahrerID = fahrerID;
    this.mitfahrerIDs = mitfahrerIDs;
    this.von = von;
    this.nach = nach;
    this.dist = dist;
    this.preis = preis;
    this.verb = datum;
    this.notiz = notiz;
  }

  kostenBerechen() {
    let gesamtKosten = this.verb * this.dist;
    this.kostenProPerson = this.gesamtKosten / mitfahrerIDs.length;

    return kostenProPerson;
  }

  forderungErstellen() {
    if (this.forderungsID == 'undefined' || this.forderungsID == null) {
      this.forderungsID = 1000;
    }
    for (i = 0; i < mitfahrerIDs.length; i++) {

      this.neueForderung = new Forderung(this.forderungsID, this.fahrerID, this.mitfahrerIDs[i], this.fahrtID, this.kostenProPerson);
      this.forderungsID = this.forderungsID + 1;
    }
  }

  verbindlichkeitErstellen() {
    if (this.verbindlichkeitsID == 'undefined' || this.verbindlichkeitsID == null) {
      this.verbindlichkeitsID = 2000;
    }
    for (i = 0; i < mitfahrerIDs.length; i++) {

      this.neueVerbindlichkeit = new Verbindlichkeit(this.verbindlichkeitsID, this.mitfahrerIDs[i], this.fahrerID, this.fahrtID, this.kostenProPerson);
      this.verbindlichkeitsID = this.verbindlichkeitsID + 1;
    }
  }
}
