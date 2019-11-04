class App {
  constructor(pages) {
    this._pages = pages;
    this._handleRoute();
  }
  run() {
    window.addEventListener("hashchange", () => {
      this._handleRoute();
    });
  }
  _handleRoute() {
    let pageURL = location.hash.slice(1);

    if (pageURL.length === 0) {
      pageURL = "/";
    }

    let page;

    let pageFound = this._pages.some(function(item,index){
      if(item.url == pageURL){
        page = item;
        return true;
      }
    });

    this.currentPageObj = new page.klasse(this);
    this.currentPageObj.show();
  }

  setPageContent(element) {
    let container = document.querySelector("#content");
    container.innerHTML = "";

    if (!element) return;
    let len = element.childNodes.length;

    for (var i = 0; i < len; i++) {
      let child = element.childNodes[0];
      element.removeChild(child);
      container.appendChild(child);
    }
  }


}
/*

window.addEventListener("load", () => {
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
});
*/
