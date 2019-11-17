class User {
  constructor(vorname, nachname) {
    this.userID = this.create_UUID();
    this.vorname = vorname;
    this.nachname = nachname;
    this.amountForderungen = [];
    this.amountVerbindlichkeiten = [];
    this.sumForderungen = this.updateSumForderungen();
    this.sumVerbindlichkeiten = this.updateSumVerbindlichkeiten();

    //   if(User.allInstances == 'undefined' || User.allInstances == null){
    //     User.allInstances = [];
    //   }
    //
    //   User.allInstances.push(this);
    // }

    this.writeUserData(this.userID, this.vorname, this.nachname, this.amountForderungen, this.amountVerbindlichkeiten, this.sumForderungen, this.sumVerbindlichkeiten);
    this.retrieveData();

    //this.nullInstances = 0;

    /*  this.getInstances(){

        return User.allInstances;
      } */
  }
  addVerbindlichkeiten(verbObj) {
    this.amountVerbindlichkeiten[anzahlVerbindlichkeiten] = verbObj;
    anzahlVerbindlichkeiten++;;
  }

  addVerbindlichkeiten(fordObj) {
    this.amountForderungen[anzahlForderungen] = fordObj;
    anzahlForderungen++;
  }

  getVerbindlichkeiten() {
    return this.amountVerbindlichkeiten;
  }

  getForderungen() {
    return this.amountForderungen;
  }


  create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  getUserID() {
    return this.userID;
  }

  updateSumForderungen() {
    var sum = 0;
    if (this.amountForderungen.length === 0) {
      this.sumForderungen = sum;
    } else {
      for (var i = 0; i < this.amountForderungen.length; i++) {
        sum += this.amountForderungen[i].wert;
      }
      this.sumForderungen = sum;
    }
  }

  updateSumVerbindlichkeiten() {
    var sum = 0;
    if (this.amountVerbindlichkeiten.length === 0) {
      this.sumVerbindlichkeiten = sum;
    } else {
      for (var i = 0; i < this.amountVerbindlichkeiten.length; i++) {
        sum += this.amountVerbindlichkeiten[i].wert;
      }
      this.sumVerbindlichkeiten = sum;
    }
  }

  writeUserData(userID, vorname, nachname, amountForderungen, amountVerbindlichkeiten) {
    firebase.database().ref('users/' + userID).set({
      userID: userID,
      vorname: vorname,
      nachname: nachname,
      amountForderungen: amountForderungen,
      amountVerbindlichkeiten: amountVerbindlichkeiten,
      sumForderungen: sumForderungen,
      sumVerbindlichkeiten: sumVerbindlichkeiten
    });
  }

   retrieveData() {
    refUser.on("value", function(snapshot) {
      User.allInstances = snapshot.val();
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }

}
