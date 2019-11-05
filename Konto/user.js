class User {
  constructor(vorname, nachname) {
    this.userID = this.create_UUID();
    this.vorname = vorname;
    this.nachname = nachname;
    this.amountForderungen = [];
    this.amountVerbindlichkeiten = [];

    if(User.allInstances == 'undefined' || User.allInstances == null){
      User.allInstances = [];
    }

    User.allInstances.push(this);
    let buchungsArray = [];
  }

  //this.nullInstances = 0;

/*  this.getInstances(){

    return User.allInstances;
  } */
  addVerbindlichkeiten(verbObj){
    this.amountVerbindlichkeiten[anzahlVerbindlichkeiten] = verbObj;
    anzahlVerbindlichkeiten++;;
  }

  addVerbindlichkeiten(fordObj){
    this.amountForderungen[anzahlForderungen] = fordObj;
    anzahlForderungen++;
  }

  getVerbindlichkeiten(){
    return this.amountVerbindlichkeiten;
  }

  getForderungen(){
    return this.amountForderungen;
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

  getUserID(){
    return this.userID;
  }

  buchungen() {
    let sum = 0;
    let kontoArray = [];
    for (i = 0; i < buchungsArray.length; i++) {
      if (userID == buchungsArray[i].glaeubigerID) {
        sum += buchungsArray[i].summe;
        kontoArray.push({
          name: buchungsArray[i].name,
          summe: buchungsArray[i].summe
        });
      } else if (userID == buchungsArray.schuldnerID) {
        sum -= buchungsArray[i];
      }
    }
    return sum;
  }

}
anzahlVerbindlichkeiten = 0;
anzahlForderungen = 0;
test1 = new User(23,"Test1","Test1.1");
test2 = new User(24,"Test2","Test2.1");
