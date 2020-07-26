class Score { }
class Food {
    constructor(public element: HTMLDivElement) {
        element.addEventListener('click', this.clickEventHandler);
    }
    clickEventHandler() {
        console.log(this);
        
        this.element.classList.toggle('food--active');
    }
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
