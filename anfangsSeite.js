class anfangsSeite {
  constructor(app) {
    this._app = app;
  }
  async show(matches) {

    //this._recordId = matches[1];
    console.log("anfangsSeite klappt");
    let html = await fetch("anfangsSeite.html");
    let htmlContent = "";

    if (html.ok) {
      htmlContent = await html.text();
    }
    let domNodes = document.createRange().createContextualFragment(htmlContent)
    this._app.setPageContent(domNodes);

    //this._app.setPageContent(htmlObject);
    let newButton = document.getElementById("newUser")
    let memoList = document.querySelector("body > main > ul");

    let insertMemo = text => {
      let liElement = document.createElement("li");
      memoList.appendChild(liElement);

      text = "Name";
      let nameElement = document.createElement("p");
      nameElement.textContent = text;
      liElement.appendChild(nameElement);

      text2 = "Nachname";
      let nachnameElement = document.createElement("p");
      nachnameElement.textContent = text2;
      liElement.appendChild(nachnameElement);

      forderungen = "Forderungen: 40Bugs";
      let forderungElement = document.createElement("label");
      forderungElement.textContent = forderungen;
      liElement.appendChild(forderungElement);

      verb = "Verbindlcihkeiten: 10Bugs";
      let verbElement = document.createElement("label");
      verbElement.textContent = verb;
      liElement.appendChild(verbElement);

      let detailsElement = document.createElement("a");
      detailsElement.textContent = "Details";
      detailsElement.classList.add("details");
      liElement.appendChild(detailsElement);

      detailsElement.addEventListener("click", () => {
        liElement.parentNode.removeChild(liElement);
      });
    };

    //insertMemo("")

    // Event Handler
    newButton.addEventListener("click", () => {
      // hier muss der button wenn auf erstelle neures Konto
      insertMemo("");
    });

    var rows = Fahrt.allInstances;
    var htmltable = '<table>';
    htmltable += '<tr>';
    for (var j in rows[0]) {
      htmltable += '<th>' + j + '</th>';
    }
    htmltable += '</tr>';
    for (var i = 0; i < rows.length; i++) {
      htmltable += '<tr>';
      for (var j in rows[i]) {
        htmltable += '<td>' + rows[i][j] + '</td>';
      }
      htmltable += '</tr>';
    }
    htmltable += '</table>';
    document.getElementById('tablecontainer').innerHTML = htmltable;
  }
}
