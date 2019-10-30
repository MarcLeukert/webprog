class Fahrt{
  constructor(fahrtID, fahrerID, mitfahrerIDs[], von, nach, dist, verb, datum, notiz){

    this.fahrtID = fahrtID;
    this.fahrerID = fahrerID;
    this.mitfahrerIDs[] = mitfahrerIDs[];
    this.von  = von;
    this.nach = nach;
    this.dist = dist;
    this.preis = preis;
    this.verb = datum;
    this.notiz = notiz;
  }

  this.gesamtKosten = 0, this.kostenProPerson = 0;

   kostenBerechen(){
    this.gesamtKosten = this.verb * this.dist;
    this.kostenProPerson = this.gesamtKosten / mitfahrerIDs.length ;

    return kostenProPerson;
  }
  this.forderungsID = 1000;
  forderungErstellen(){
    for(int i = 0, i<mitfahrerIDs.length){

    this.neueForderung = new Forderung(this.forderungsID, this.fahrerID, this.mitfahrerIDs[i], this.fahrtID, this.kostenProPerson);
    this.forderungsID = this.forderungsID +1;
  }
  }

  this.verbindlichkeitsID = 2000;
  verbindlichkeitErstellen(){
    for(int i = 0, i<mitfahrerIDs.length){

    this.neueVerbindlichkeit = new Verbindlichkeit(this.verbindlichkeitsID, this.mitfahrerIDs[i], this.fahrerID, this.fahrtID, this.kostenProPerson);
    this.verbindlichkeitsID = this.verbindlichkeitsID +1;
  }
  }
}
