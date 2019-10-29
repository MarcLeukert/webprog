class neueFahrt {
  constructor(app) {
    this._app = app;
  }
async show(){
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
let selectFahrer = document.getElementById("selectFahrer");
let fahrerInput = null;
let selectMitfahrer = document.getElementById("selectMitfahrer");
let mitfahrerInput = null;
let inputDistanz = document.getElementById("inputDistanz");
let inputVon = document.getElementById("inputVon");
let inputNach = document.getElementById("inputNach");
let inputPreis = document.getElementById("inputPreis");
let inputDatum = document.getElementById("inputDatum");
let inputNotiz = document.getElementById("inputNotiz");
let erstellenButton = document.getElementById("butErstellen");
let dataArray = [];

erstellenButton.addEventListener("click", () => {
    console.log("Funkt");
    inputDistanz = inputDistanz.value;
    inputVon = inputVon.value;
    inputNach = inputNach.value;
    inputPreis = inputPreis.value;
    inputDatum = inputDatum.value;
    dataArray.push(inputDistanz, inputVon, inputNach, inputPreis, inputDatum);
    inputNotiz.innerHTML = dataArray;
});

selectFahrer.addEventListener("change", () =>{
  console.log("Change now");
  console.log(selectFahrer.value);
  dataArray.push(selectFahrer.value);
});

selectMitfahrer.addEventListener("change", () =>{
  console.log("Change now");
  console.log(selectMitfahrer.value);
  dataArray.push(selectMitfahrer.value);
});

let hinzuBut = document.getElementById("buttonHinzu");

hinzuBut.addEventListener("click", function(){
  console.log("Till stinkt");
  let buttonDivBox = document.getElementById("divButtonHinzu");
  let neuerButton = document.createElement("neuerBut");
  let data = document.createTextNode("tachchen");
  neuerButton.appendChild(data);
  buttonDivBox.appendChild(neuerButton);
});

});
