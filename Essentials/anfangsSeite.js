class anfangsSeite {
  constructor(app) {
    this._app = app;
  }
  async show(matches) {

    //this._recordId = matches[1];
    console.log("anfangsSeite klappt");
    let html = await fetch("Essentials/anfangsSeite.html");
    let htmlContent = "";

    if (html.ok) {
      htmlContent = await html.text();
    }
    let domNodes = document.createRange().createContextualFragment(htmlContent)
    this._app.setPageContent(domNodes);

    //this._app.setPageContent(htmlObject);
    let newButton = document.getElementById("butKontoBack");
    let memoList = document.getElementById('userList');


    //let insertUser = () => {

    await refUser.once("value", async function(snapshot) {
        User.allInstances = await snapshot.val();
      },
      function(errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

    await refTrip.once("value", async function(snapshot) {
        Fahrt.allInstances = await snapshot.val();
      },
      function(errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

    for (let i = 0; Object.keys(User.allInstances).length > i; i++) {

      let liElement = document.createElement("li");
      liElement.setAttribute("class", "liItemAnfang");
      memoList.appendChild(liElement);


      let name = Object.entries(User.allInstances)[i][1].vorname;
      let nameElement = document.createElement("p");
      nameElement.textContent = name;
      liElement.appendChild(nameElement);

      let nachname = Object.entries(User.allInstances)[i][1].nachname;
      let nachnameElement = document.createElement("p");
      nachnameElement.textContent = nachname;
      liElement.appendChild(nachnameElement);

      let label_forderungen = "Forderungen:";
      let label_forderungElement = document.createElement("div");
      label_forderungElement.textContent = label_forderungen;
      liElement.appendChild(label_forderungElement);

      let forderungen = 0;
      if (Object.keys(User.allInstances)[i].sumForderungen != undefined) {
        forderungen = Object.keys(User.allInstances)[i].sumForderungen;
      }
      let forderungElement = document.createElement("label");
      forderungElement.style.color = "Green";
      forderungElement.textContent = forderungen;
      liElement.appendChild(forderungElement);

      let label_verb = "Verbindlichkeiten:";
      let label_verbElement = document.createElement("div");

      label_verbElement.textContent = label_verb;
      liElement.appendChild(label_verbElement);

      let verb = 0;
      if (Object.keys(User.allInstances)[i].sumVerbindlichkeiten != undefined) {
        verb = Object.keys(User.allInstances)[i].sumVerbindlichkeiten;
      }
      let verbElement = document.createElement("label");
      verbElement.textContent = verb;
      verbElement.style.color = "Tomato";

      liElement.appendChild(verbElement);
      // insert break
      let br = document.createElement("br");
      liElement.appendChild(br);
      //Detailbutton
      let detailsElement = document.createElement("button");
      detailsElement.textContent = "Details";
      detailsElement.setAttribute("class","detailButton");
      detailsElement.setAttribute("id", "detailNr" + i);
      liElement.appendChild(detailsElement);

      /* soll die Detailangaben in Modal View aufrufen, Container dafür */
      let divModal = document.createElement("div");
      divModal.setAttribute("class", "divModal");
      let divModalInhalt = document.createElement("div");
      divModalInhalt.setAttribute("class", "divModalInhalt");
      let spanClose = document.createElement("span");
      spanClose.setAttribute("class", "closeButton")
      let divContent = document.createElement("div");
      divContent.setAttribute("id", "divContent");

      let detailDiv = document.createElement("div");
      detailDiv.textContent = "Keine Details vorhanden";

      let createdTable = detailDiv;
      if (Object.keys(User.allInstances)[i].sumVerbindlichkeiten != undefined || Object.keys(User.allInstances)[i].sumForderungen != undefined) {
        createdTable = createDetailsTable(i);
      }

      divContent.appendChild(createdTable);

      //divContent.innerText = "Servus Erdnuss";
      spanClose.innerText = "x";
      divModalInhalt.appendChild(spanClose);
      divModalInhalt.appendChild(divContent);
      divModal.appendChild(divModalInhalt);
      liElement.appendChild(divModal);

      function toggleModal() {
        divModal.classList.toggle("showDivModal");
      }
      window.addEventListener("click", () => {
        if (event.target === divModal) {
          toggleModal();
        }
      });
      spanClose.addEventListener("click", toggleModal);
      detailsElement.addEventListener("click", toggleModal);

    }

    tabelleFahrtBefuellen(); //Befüllt die Tabelle mit erstellten Fahrten

  }
}

function createDetailsTable(derZaehler) {
  let zaehler = derZaehler;
  let table = document.createElement("table");
  table.setAttribute("id", "createdTable");

  var orderArrayHeader = ["Art", "An / Von", "Betrag", "Datum der Fahrt"];
  var forderungen = [],
    verbindlichkeiten = [];
  forderungen = Object.keys(User.allInstances)[zaehler].amountForderungen;
  verbindlichkeiten = Object.keys(User.allInstances)[zaehler].amountVerbindlichkeiten;

  let thead = table.createTHead();
  let row = thead.insertRow();
  for (i = 0; i < orderArrayHeader.length; i++) {
    let th = document.createElement("th");
    let text = document.createTextNode(orderArrayHeader[i]);
    th.appendChild(text);
    row.appendChild(th);
  }
  let j = 0,
    h = 0;
  for (j; j < forderungen.length; j++) {
    let checkAr = forderungen[j];
    let row = table.insertRow();
    //for (h; h < arrayData[j].length; h++) {
    //let checkDa = forderungen[j][h];
    let cell1 = row.insertCell();
    let art = document.createTextNode("Forderung");
    cell1.appendChild(art);
    let cell2 = row.insertCell();
    let vonAn = document.createTextNode(forderungen[j]._schuldnerID);
    cell2.appendChild(vonAn);
    let cell3 = row.insertCell();
    let betrag = document.createTextNode(forderungen[j].wert);
    cell3.appendChild(betrag);
    let cell4 = row.insertCell();
    let datum = document.createTextNode("20.01.2019");
    cell4.appendChild(datum);
  }
  j = 0;
  for (j; j < verbindlichkeiten.length; j++) {
    let checkAr = verbindlichkeiten[j];
    let row = table.insertRow();
    //for (h; h < arrayData[j].length; h++) {
    //let checkDa = forderungen[j][h];
    let cell1 = row.insertCell();
    let art = document.createTextNode("Verbindlichkeit");
    cell1.appendChild(art);
    let cell2 = row.insertCell();
    let vonAn = document.createTextNode(verbindlichkeiten[j].glaubigerID);
    cell2.appendChild(vonAn);
    let cell3 = row.insertCell();
    let betrag = document.createTextNode(verbindlichkeiten[j].wert);
    cell3.appendChild(betrag);
    let cell4 = row.insertCell();
    let datum = document.createTextNode("20.01.2019");
    cell4.appendChild(datum);
  }
  return table;
}

function tabelleFahrtBefuellen() {
  var table = document.getElementById('table');
  var snapshotArray = Object.values(Fahrt.allInstances);

  if (snapshotArray != undefined) {
    for (var i = 0; i < snapshotArray.length; ++i) {
      // keep a reference to an individual president object
      var fahrtInstance = snapshotArray[i];

      // create a row element to append cells to
      var row = document.createElement('tr');

      // properties of the array elements
      var properties = ['von', 'nach', 'dist', 'preis'];

      // append each one of them to the row in question, in order
      for (var j = 0; j < properties.length; ++j) {
        // create new data cell for names
        var cell = document.createElement('td');

        // set name of property using bracket notation (properties[j] is a string,
        // which can be used to access properties of president)
        cell.innerHTML = fahrtInstance[properties[j]];

        // add to end of the row
        row.appendChild(cell);
      }

      // add new row to table
      table.appendChild(row);
    }
  }
}
