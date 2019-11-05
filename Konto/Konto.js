class neuesKonto {
  constructor(app) {
    this._app = app;
  }
  async show(matches) {

    //this._recordId = matches[1];
    console.log("Neues Konto klappt");
    let html = await fetch("Konto/neuesKonto.html");
    let htmlContent = "";

    if (html.ok) {
      htmlContent = await html.text();
    }
    let domNodes = document.createRange().createContextualFragment(htmlContent)
    this._app.setPageContent(domNodes);

    //this._app.setPageContent(htmlObject);

    console.log("Konto öffnet sich");
    //let userID = 0;
    let newButton = document.getElementById("createKonto");
    let vorname = document.getElementById("vorname");
    let nachname = document.getElementById("nachname");

    newButton.addEventListener("click", () => {
      let user = new User(vorname.value, nachname.value);
      //userID++;
      console.log("klappt");
    });
  }
}
