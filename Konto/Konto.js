class neuesKonto {
  constructor(app) {
    this._app = app;
  }
  async show() {
    console.log("Neues Konto klappt");
    let html = await fetch("Konto/neuesKonto.html");
    let htmlContent = "";

    if (html.ok) {
      htmlContent = await html.text();
    }
    this._app.setPageContent(htmlContent);
  }
}

window.addEventListener("load", () => {
  let userID = 0;
  let newButton = document.getElementById("createKonto");
  let vorname = document.getElementById("vorname");
  let nachname = document.getElementById("nachname");

  newButton.addEventListener("click", () => {
    let user = new User(userID, vorname.value, nachname.value);
    userID++;

  });
});
