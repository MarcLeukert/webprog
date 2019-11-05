class Forderung{

  constructor(forderungsID, inhaberID, schuldnerID, fahrtID, wert){
    this.forderungID = forderungsID;
    this._fahrtID = fahrtID;
    this._inhaberID = inhaberID;
    this._schuldnerID = schuldnerID;
    this.wert = wert;

  }
}
