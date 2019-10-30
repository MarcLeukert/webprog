class App {
  constructor(pages) {
    this._pages = pages;
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
    let matches = null;

    let page = this._pages.find(p => matches = pageURL.match(p.url));

    this.currentPageObj = new page.klasse(this);
    this.currentPageObj.show(matches);
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


window.addEventListener("load", () => {
  let newButton = document.getElementById("newUser")
  let memoList = document.querySelector("body > main > ul");

  let insertMemo = text => {
    let liElement = document.createElement("li");
    memoList.appendChild(liElement);

    let memoTextElement = document.createElement("p");
    memoTextElement.textContent = text;
    liElement.appendChild(memoTextElement);

    let deleteElement = document.createElement("a");
    deleteElement.textContent = "Begleichen";
    deleteElement.classList.add("delete");
    liElement.appendChild(deleteElement);

    deleteElement.addEventListener("click", () => {
      liElement.parentNode.removeChild(liElement);
    });
  };

  insertMemo("Klicke auf „Neuer Nutzer”, um einen neuen Nutzer anzulegen")

  // Event Handler
  newButton.addEventListener("click", () => {
    // hier muss der button wenn auf erstelle neures Konto
  });
});
