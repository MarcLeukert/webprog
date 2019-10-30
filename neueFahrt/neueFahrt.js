class neueFahrt {
  constructor(app) {
    this._app = app;
  }
async show(matches){

  this._recordId = matches[1];
    console.log("Neue Fahrt klappt");
    let html = await fetch("neueFahrt/neueFahrt.html");
    let htmlContent ="";

    if(html.ok){
      htmlContent = await html.text();
    }
    this._app.setPageContent(htmlContent);
  }


}
window.addEventListener("load", () =>{
  createSelectObjects();
let selectFahrer = document.getElementById("selectFahrer");
let fahrerInput = null;
let selectMitfahrer = document.getElementById("selectMitfahrer");
let mitfahrerInput = null;
let inputDistanz = document.getElementById("inputDistanz");
let inputVon = document.getElementById("inputVon");
let inputNach = document.getElementById("inputNach");
let inputPreisProL = document.getElementById("inputPreis");
let inputVerbauch = document.getElementById("inputVerbauch");
let inputDatum = document.getElementById("inputDatum");
let inputNotiz = document.getElementById("inputNotiz");
let erstellenButton = document.getElementById("butErstellen");
let dataArray = [6];
let fahrtID = 100;

erstellenButton.addEventListener("click", () => {

    console.log("Funkt");
    fahrerID = 100; // kommt eigentlich aus objekt aus dem selectFahrer
    mitfahrerIDs = [200,300]; // kommt eigentlich aus objekt aus dem selectFahrer
    inputDistanz = inputDistanz.value;
    inputVon = inputVon.value;
    inputNach = inputNach.value;
    inputPreis = inputPreis.value;
    inputDatum = inputDatum.value;
    inputVerbauch = inputVerbauch.value;

    //objekt fahrt erstellen

    let dieseFahrt = new Fahrt(fahrtID, fahrerID, mitfahrerIDs, inputVon, inputNach, inputDistanz, inputVerbrauch, inputDatum, inputNotiz);
    fahrtID = fahrtID +1;
    if(dataArray[0]==null){
      dataArray[0]= 0;
    }
    else if(dataArray[1]==null){
      dataArray[1]=0;
    }
    dataArray[2]=inputDistanz, dataArray[3] =inputVon, dataArray[4] = inputNach, dataArray[5] = inputPreis, dataArray[6] = inputDatum;
    inputNotiz.innerHTML = dataArray;
});

selectFahrer.addEventListener("change", () =>{
  dataArray[0] = selectFahrer.value;
  console.log(selectFahrer.value);
});

selectMitfahrer.addEventListener("change", () =>{
  if(dataArray[0]==null){
        dataArray[i] = 0;
  }
  dataArray[1] = selectMitfahrer.value;
  console.log(selectMitfahrer.value);
});

let hinzuBut = document.getElementById("buttonHinzu");

hinzuBut.addEventListener("click", function(){
  console.log("Till stinkt");
  mitfahrerHinzufuegen();
});

});

function createSelectObjects(){

}

function mitfahrerHinzufuegen(){
  let selectDivBox = document.getElementById("divWeiteresSelect");
  let neuesDiv = document.createElement("div");
  let neuesSpan = document.createElement("span");
  let neuesSelect = document.createElement("select");
  let data = document.createTextNode("");
  neuesSpan.setAttribute("class","spanAttribut");
  let optionManuel = createOption("Manuel");
  let optionHannes = createOption("Hannes");
  let optionLiam = createOption("Liam");
  let optionMarc = createOption("Marc");
  neuesSelect.options[0] = optionManuel;
  neuesSelect.options[1] = optionHannes;
  neuesSelect.options[2] = optionLiam;
  neuesSelect.options[3] = optionMarc;
  neuesSelect.setAttribute("class","classSelect");
  neuesSpan.setAttribute("class","spanAttribut");
  neuesDiv.setAttribute("class","neueDivBox");
  neuesSpan.appendChild(data);
  neuesDiv.appendChild(neuesSpan);
  neuesDiv.appendChild(neuesSelect);
  selectDivBox.appendChild(neuesDiv);
}

function createOption(str){
  let option = document.createElement("option");
  option.value = str;
  option.text = str;
  return option;
}
