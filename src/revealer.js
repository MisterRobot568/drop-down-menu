// JS class that takes an element class name or ID as an input
class Revealer {
    constructor(elementID) {
        this.element = document.getElementById(elementID);
        this.children = this.element.children;
        // this.element.style.color = 'blue';
        // this.element.style.opacity = 0;
        this.toggleStyles(0);

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        // inside of the event listener, the context of 'this' changes.
        // when the methods are invoked, 'this' might refer to something other
        // than the 'Revealer' instance. To ensure that 'this' refers to the 'Revealer'
        // instance within the listener methods, you can bind them in the constructor
        this.setupEventListeners();
    }

    handleMouseOver() {
        // dynamically create css code here that would reveal the dropdown menu
        this.toggleStyles(1);
    }

    handleMouseOut() {
        this.toggleStyles(0);
        // dynamically create css code here that would hide the dropdown menu
    }

    // next we add an event listener to listen for clicks or hovers. Let's try hovers
    setupEventListeners() {
        this.element.addEventListener('mouseover', this.handleMouseOver);
        this.element.addEventListener('mouseout', this.handleMouseOut);
    }

    toggleStyles(opacity) {
        for (let i = 0; i < this.children.length; i += 1) {
            const child = this.children[i];
            child.style.transition = 'opacity 0.3s ease';
            child.style.opacity = opacity;

            child.style.visibility = opacity === 0 ? 'hidden' : 'visible';
        }
    }
}

export default Revealer;
