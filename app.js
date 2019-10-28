class App {
  constructor(pages) {
    this._pages = pages;
  }
  run(){
    window.addEventListener("hashchange", ()=> {
    this._handleRoute();
    });
  }
  _handleRoute(){
    let pageURL = location.hash.slice(1);
    let matches = null;

    let page = this._pages.find(p => matches = pageUrl.match(p.url));

    this.currentPageObj = new page.klasse(this);
    this.currentPageObj.show();
  }
}
