class Card extends HTMLElement {
    static get observedAttributes() {
      return ["img", "title", "description", "txtbutton"];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {
      this[propName] = newValue;
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./src/components/card/card.css">
      <section class="container">
  
      <div class= "product-img">
      <img src="${this.img}" alt="">
      </div> 
  
      <div class= "product-text">
      <h1>${this.title}</h1>
      <p>${this.description}</p> 
      <button>${this.txtbutton}</button>
      </div>
     
      
      </section>
      
     `;
    }
  }
  
  customElements.define("product-card", Card);
  export default Card;
  