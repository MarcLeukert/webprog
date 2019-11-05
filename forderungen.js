class Forderung{

  constructor(inhaberID, schuldnerID, fahrtID, wert){
    this.forderungID = this.create_UUID();
    this._fahrtID = fahrtID;
    this._inhaberID = inhaberID;
    this._schuldnerID = schuldnerID;
    this.wert = wert;

  }

  create_UUID(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }
}
