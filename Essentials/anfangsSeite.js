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

    for (let i = 0; User.allInstances.length > i; i++) {

      let liElement = document.createElement("li");
      memoList.appendChild(liElement);

      let name = User.allInstances[i].vorname;
      let nameElement = document.createElement("p");
      nameElement.textContent = name;
      liElement.appendChild(nameElement);

      let nachname = User.allInstances[i].nachname;
      let nachnameElement = document.createElement("p");
      nachnameElement.textContent = nachname;
      liElement.appendChild(nachnameElement);

      let label_forderungen = "Forderungen:";
      let label_forderungElement = document.createElement("div");
      label_forderungElement.textContent = label_forderungen;
      liElement.appendChild(label_forderungElement);

      let forderungen = 0;
      if (User.allInstances[i].sumForderungen != undefined) {
        forderungen = User.allInstances[i].sumForderungen;
      }
      let forderungElement = document.createElement("label");
      forderungElement.textContent = forderungen;
      liElement.appendChild(forderungElement);

      let label_verb = "Verbindlichkeiten:";
      let label_verbElement = document.createElement("div");
      label_verbElement.textContent = label_verb;
      liElement.appendChild(label_verbElement);

      let verb = 0;
      if (User.allInstances[i].sumVerbindlichkeiten != undefined) {
        verb = User.allInstances[i].sumVerbindlichkeiten;
      }
      let verbElement = document.createElement("label");
      verbElement.textContent = verb;

      liElement.appendChild(verbElement);
      //Detailbutton
      let detailsElement = document.createElement("button");
      detailsElement.textContent = "Details";
      detailsElement.classList.add("details");
      detailsElement.setAttribute("id","detailNr"+i);
      liElement.appendChild(detailsElement);

      /* soll die Detailangaben in Modal View aufrufen, Container dafür */
      let divModal = document.createElement("div");
      divModal.setAttribute("class", "divModal");
      let divModalInhalt = document.createElement("div");
      divModalInhalt.setAttribute("class", "divModalInhalt");
      let spanClose = document.createElement("span");
      spanClose.setAttribute("class", "closeButton")
      let divContent = document.createElement("div");

      let createdTable = createTable();

      divContent.appendChild(createdTable);

      divContent.innerText = "Servus Erdnuss";
      spanClose.innerText = "x" ;
      divModalInhalt.appendChild(spanClose);
      divModalInhalt.appendChild(divContent);
      divModal.appendChild(divModalInhalt);
      liElement.appendChild(divModal);

      function toggleModal(){
        divModal.classList.toggle("showDivModal");
      }
      window.addEventListener("click", () => {
        if(event.target === divModal){
          toggleModal();
        }
      });
    spanClose.addEventListener("click",toggleModal);
    detailsElement.addEventListener("click",toggleModal);

    }

    tabelleFahrtBefuellen(); //Befüllt die Tabelle mit erstellten Fahrten

  }
}

function createTable(){
  let table = document.createElement("table");

  var tablehead1 = document.createElement("tablehead");
  var tablehead2 = document.createElement("tablehead");
  var tablehead3 = document.createElement("tablehead");
  var tablehead4 = document.createElement("tablehead");

  var orderArrayHeader = ["S.No","Date","Product Name","Client Name"];

  var thead = document.createElement('thead');

  table.appendChild(thead);

  for(var y=0;y<orderArrayHeader.length;y++){
      thead.appendChild(document.createElement("th")).
      appendChild(document.createTextNode(orderArrayHeader[y]));
  }
/*
  if (Fahrt.allInstances != undefined) {
    for (var i = 0; i < Fahrt.allInstances.length; ++i) {
      // keep a reference to an individual president object
      var fahrtInstance = Fahrt.allInstances[i];

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
  */

  return table;
}

function tabelleFahrtBefuellen(){
  var table = document.getElementById('table');

  // cycle through the array for each of the presidents
  if (Fahrt.allInstances != undefined) {
    for (var i = 0; i < Fahrt.allInstances.length; ++i) {
      // keep a reference to an individual president object
      var fahrtInstance = Fahrt.allInstances[i];

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




  //insertMemo("");

  // Event Handler
  // newButton.addEventListener("click", () => {
  //   // hier muss der button wenn auf erstelle neures Konto
  //   insertUser("");
  // });

  //}
