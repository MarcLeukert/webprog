class neuesKonto {
  constructor(app) {
    this._app = app;
  }
async show(){
    console.log("Neues Konto klappt");
    let html = await fetch("Konto/neuesKonto.html");
    let htmlContent ="";

    if(html.ok){
      htmlContent = await html.text();
    }
    this._app.setPageContent(htmlContent);
  }
}
