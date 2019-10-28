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
