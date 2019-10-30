class User {



  constructor(userID, vorname, nachname) {
    this.userID = userID;
    this.vorname = vorname;
    this.nachname = nachname;

    User.allInstances.push(this);
    let buchungsArray = [];
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
