class Score { }
class Food {
    constructor(public element: HTMLDivElement) {
        element.addEventListener('click', clickEventHandler);
    }
    clickEventHandler() {}
}
class Foods {
    elements = document.querySelectorAll<HTMLDivElement>('.Food');
    constructor() {
        this.elements.forEach(element => {
            new Food(element); 
        })
    }
}
const foods = new Foods();
