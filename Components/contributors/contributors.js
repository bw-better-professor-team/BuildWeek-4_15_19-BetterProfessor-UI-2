class Tabs {
  constructor(tabe) {
    this.tabe = tabe;
    this.tabindex = this.tabe.dataset.tab;

    if (this.tabindex === "all") {
      this.cards = document.querySelectorAll(".card");
    } else {
      this.cards = document.querySelectorAll(
        `.card[data-tab='${this.tabindex}']`
      );
    }

    this.cards = Array.from(this.cards).map(element => {
      return new Cards(element);
    });

    this.tabe.addEventListener("click", () => this.cardSelector());
  }

  cardSelector() {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(element => element.classList.remove("active-tab"));
    const cards = document.querySelectorAll(".card");
    cards.forEach(element => (element.style.display = "none"));
    this.tabe.classList.add('active-tab')
    this.cards.forEach(card => card.selectCard());
  }
}

class Cards {
  constructor(cardElement) {
    this.cardElement = cardElement;
  }
  selectCard() {
    this.cardElement.style.display = "block";
  }
}

const tabs = document.querySelectorAll(".tab");

tabs.forEach(element => {
  //console.log(element)
  return new Tabs(element);
});


/**

@-webkit-keyframes rotate-scale-up{0%{-webkit-transform:scale(1) rotateZ(0);transform:scale(1) rotateZ(0)}50%{-webkit-transform:scale(2) rotateZ(180deg);transform:scale(2) rotateZ(180deg)}100%{-webkit-transform:scale(1) rotateZ(360deg);transform:scale(1) rotateZ(360deg)}}@keyframes rotate-scale-up{0%{-webkit-transform:scale(1) rotateZ(0);transform:scale(1) rotateZ(0)}50%{-webkit-transform:scale(2) rotateZ(180deg);transform:scale(2) rotateZ(180deg)}100%{-webkit-transform:scale(1) rotateZ(360deg);transform:scale(1) rotateZ(360deg)}} */