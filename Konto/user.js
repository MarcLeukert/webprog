class User {
  constructor(userID, vorname, nachname) {
    this.userID = userID;
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
test2 = new User(23,"Test2","Test2.1");
