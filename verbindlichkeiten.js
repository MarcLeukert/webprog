class Verbindlichkeit{
  constructor(inhaberID, glaeubigerID,fahrtID,  wert){
    this.verbindlichkeitsID = this.create_UUID();
    this.fahrtID = fahrtID;
    this.glaeubigerID = glaeubigerID;
    this.inhaberID = inhaberID;
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
