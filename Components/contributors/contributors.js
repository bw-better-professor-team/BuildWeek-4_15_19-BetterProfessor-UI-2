class Tabs
{
    constructor(tabe){
        this.tabe = tabe;
        this.tabindex = this.tabe.dataset.tab;
        if (this.tabindex==='all') {
            this.cards = document.querySelectorAll('.card')
        }   
        else{
            this.querySelectorAll(`.card[data-tab='${this.tabinedx}']`)
        }    
        
    }
}





const tabs = document.querySelectorAll('.tab');

tabs.forEach(element => {
    //console.log(element)
    return new Tabs(element)
    });
