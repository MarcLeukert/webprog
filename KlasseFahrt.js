class Fahrt{
  constructor(fahrtID, fahrerID, mitfahrerID, von, nach, dist, verb, datum, notiz){

    this.fahrerID = fahrerID;
    this.mitfahrerID = mitfahrerID;
    this.von  = von;
    this.nach = nach;
    this.dist = dist;
    this.preis = preis;
    this.verb = datum;
    this.notiz = notiz;
  }

  this.gesamtKosten = 0, this.mitfahrerKosten = 0;
  function kostenBerechen(){
    this.gesamtKosten = this.verb * this.dist;
  }
}
