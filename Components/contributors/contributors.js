class Tabs {
  constructor(tabe) {
    this.tabe = tabe;
    // grab the data-tab attribute from each element
    this.tabindex = this.tabe.dataset.tab;

    //grab the cards based on the attribute from the data-tab

    if (this.tabindex === "all") {
      this.cards = document.querySelectorAll(".card");
    } else {
      this.cards = document.querySelectorAll(
        `.card[data-tab='${this.tabindex}']`
      );
    }
     //loop thorough each card and pass it to another class (Cards)
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
    //run selectCard method for each card 
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

//grab the element we want to manuplate 
const tabs = document.querySelectorAll(".tab");

//loop through each element and pass it to the class ( Tabs)
tabs.forEach(element => {
  //console.log(element)
  return new Tabs(element);
});


