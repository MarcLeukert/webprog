//Start trans
class neueFahrt {
  constructor(app) {
    this._app = app;
  }
  async show(matches) {

    //this._recordId = matches[1];
    console.log("Neue Fahrt klappt");
    let html = await fetch("neueFahrt/neueFahrt.html");
    let htmlContent = "";

    if (html.ok) {
      htmlContent = await html.text();
    }
    let domNodes = document.createRange().createContextualFragment(htmlContent)
    this._app.setPageContent(domNodes);

    //this._app.setPageContent(htmlObject);
    console.log("load methode öffent");
    let fahrerInput = null;
    let mitfahrerInput = null;
    let inputDistanz = document.getElementById("inputDistanz");
    let inputVon = document.getElementById("inputVon");
    let inputNach = document.getElementById("inputNach");
    let inputPreis = document.getElementById("inputPreis");
    let inputVerbrauch = document.getElementById("inputVerbrauch");
    let inputDatum = document.getElementById("inputDatum");
    let inputNotiz = document.getElementById("inputNotiz");
    let erstellenButton = document.getElementById("butErstellen");
    let backButton = document.getElementById("butFahrtBack");
    let dataArray = [];
    let fahrtID = 100;

    //für create SelectObjects
    let fahrerSelect = document.getElementById("selectFahrer");
    let mitfahrerSelect = document.getElementById("selectMitfahrer");
    let anzahlMitfahrerSelects = 1;



    createSelectObjects(fahrerSelect, mitfahrerSelect);

    erstellenButton.addEventListener("click", () => {

      console.log("Funkt");
      console.log(anzahlMitfahrerSelects);
      let fahrerID = fahrerSelect.value; // kommt eigentlich aus objekt aus dem selectFahrer
      let mitfahrerIDs = []
      //mitfahrerIDs.push(mitfahrerSelect.value);
      for(i=0; i<anzahlMitfahrerSelects;i++){
        let zwi =document.getElementById("newDymSelect"+anzahlMitfahrerSelects);
        mitfahrerIDs[i] = zwi.value;
        //mitfahrerIDs[i] = i+10;

      }
      inputDistanz = inputDistanz.value;
      inputVon = inputVon.value;
      inputNach = inputNach.value;
      inputPreis = inputPreis.value;
      inputDatum = inputDatum.value;
      inputVerbrauch = inputVerbrauch.value;

      //objekt fahrt erstellen

      let dieseFahrt = new Fahrt(fahrtID, fahrerID, mitfahrerIDs, inputVon, inputNach,inputPreis, inputDistanz, inputVerbrauch, inputDatum, inputNotiz);
      //console.log(dieseFahrt.von);
      fahrtID = fahrtID + 1;
      if (dataArray[0] == null) {
        dataArray[0] = 0;
      } else if (dataArray[1] == null) {
        dataArray[1] = 0;
      }
      dataArray[2] = inputDistanz, dataArray[3] = inputVon, dataArray[4] = inputNach, dataArray[5] = inputPreis, dataArray[6] = inputDatum, dataArray[7]= inputNotiz.value;
      inputNotiz.innerHTML = dataArray;
    });

    selectFahrer.addEventListener("change", () => {
      dataArray[0] = selectFahrer.value;
      console.log(selectFahrer.value);
      /* console.log(selectMitfahrer.dataset.rc);
      console.log(selectMitfahrer.dataset.clnc);
      console.log(selectFahrer.dataset.rc);
      console.log(selectFahrer.dataset.clnc);*/
    });

    selectMitfahrer.addEventListener("change", () => {
      if (dataArray[0] == null) {
        dataArray[i] = 0;
      }
      dataArray[1] = selectMitfahrer.value;
      console.log(selectMitfahrer.value);
    });

    let hinzuBut = document.getElementById("buttonHinzu");

    hinzuBut.addEventListener("click", function() {
      mitfahrerHinzufuegen(anzahlMitfahrerSelects);
      anzahlMitfahrerSelects++;
    });

    /* backButton.addEventListener("click", () => {

    }); */
  }
}

function createSelectObjects(fS, mS) {    //um selects dynamisch zu füllen
  //console.log(User.allInstances);
  let fahrerSelect = fS;
  let mitfahrerSelect = mS;
  /* Mockdaten
  let tim = new User(2, "Tim", "Wieb");
  let manu = new User(3, "Manuel", "Koe");
  let till = new User(4,"Till","Schirr"); */
  //User.allInstances.push(tim);
  let instances = User.allInstances;

  //let instances = ["Whaat","Till","Stinkt"];

  for (i = 0; i < instances.length; i++) {
    let selectOptionF = createOption(instances[i]);
    let selectOptionM = createOption(instances[i]);
    selectOptionF.setAttribute("class", "classSelect");
    fahrerSelect.appendChild(selectOptionF);
    selectOptionM.setAttribute("class", "classSelect");
    mitfahrerSelect.appendChild(selectOptionM);
  }

}

function mitfahrerHinzufuegen(anzahlMitfahrerSelects) {
  let selectDivBox = document.getElementById("divWeiteresSelect");
  let neuesDiv = document.createElement("div");
  let neuesSpan = document.createElement("span");
  let neuesSelect = document.createElement("select");
  let data = document.createTextNode("");
  let instances = User.allInstances;
  neuesSpan.setAttribute("class", "spanAttribut");
  let neueOptions = [];
  for(i = 0 ; i<instances.length; i++){
     neueOptions[i] =  createOption(instances[i]);
     neueOptions[i].setAttribute("class", "classSelect");
     neuesSelect.appendChild(neueOptions[i]);
  }
  neuesSelect.setAttribute("class", "classSelect");
  neuesSelect.setAttribute("id","newDymSelect"+anzahlMitfahrerSelects); //selects brauchen id
  neuesSpan.setAttribute("class", "spanAttribut");
  neuesDiv.setAttribute("class", "neueDivBox");
  neuesSpan.appendChild(data);
  neuesDiv.appendChild(neuesSpan);
  neuesDiv.appendChild(neuesSelect);
  selectDivBox.appendChild(neuesDiv);
  }

function createOption(obj) {
  let option = document.createElement("option");
  option.value = obj.userID;
  option.dataset.rc = obj.userID;   //muss schauen ob noch gebraucht wird
  option.dataset.clnc = obj.userID;
  option.text = obj.vorname;
  return option;
}
