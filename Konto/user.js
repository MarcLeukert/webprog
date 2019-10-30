class User {

  constructor(userID,vorname, nachname) {
    this.userID = userID;
    this.vorname = vorname;
    this.nachname = nachname;

    let buchungsArray = [];
  }

  buchungen(){
    let sum = 0;
    for(i = 0; i < buchungsArray.length; i++){
      if (userID == buchungsArray[i].glaeubigerID) {
        sum += buchungsArray[i].summe;
      }else if (userID == buchungsArray.schuldnerID) {
        sum -= buchungsArray[i];
      }
    }
    return sum;
  }

}
