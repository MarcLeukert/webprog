class anfangsSeite{
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
              let label_forderungElement = document.createElement("label");
              label_forderungElement.textContent = label_forderungen;
              liElement.appendChild(label_forderungElement);

              let forderungen = User.allInstances[i].forderungen;
              let forderungElement = document.createElement("label");
              forderungElement.textContent = forderungen;
              liElement.appendChild(forderungElement);

              let label_verb = "Verbindlichkeiten:";
              let label_verbElement = document.createElement("label");
              label_verbElement.textContent = label_verb;
              liElement.appendChild(label_verbElement);

              let verb = User.allInstances[i].verbindlichkeiten;
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
          }
      };



      //insertMemo("");

      // Event Handler
      // newButton.addEventListener("click", () => {
      //   // hier muss der button wenn auf erstelle neures Konto
      //   insertUser("");
      // });

  //}
}
