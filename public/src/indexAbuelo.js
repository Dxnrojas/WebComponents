import * as component from './components/indexPadre.js';

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'}); //Encapsula el codigo y permitir que el DOM encuentre nueva clase
    }

    //Cuando el componente se carga en el DOM hace lo que le indiquemos
    connectedCallback() {
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <product-card 
        img = "https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/kj6n1mmv5i3yqjvk6f56" 
        title= "The Legend of Zelda amiibo"
        description= "Potencia tu juego con los amiibo de la coleccion The Legend of Zelda."
        txtbutton= "Completa tu coleccion!"
        ></product-card>
        
        <product-card 
        img = "https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/afdfdrgq8i4dpnere9h5" 
        title= "Mega Promocion 12+2"
        description= "2 meses adicionales al comprar cualquier suscripcion de 12 meses."
        txtbutton= "Ver mas detalles"
        ></product-card>

        <product-card 
        img = "https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/lvk7zz3tlmx5gqhpgf5r" 
        title= "Mando de Nintendo 64"
        description= "Disfruta de los juegos de Nintendo 64 de la forma en que se deben jugar: Con un mando inalambrico de tamaño completo de Nintendo 64!"
        txtbutton= "Comprar"
        ></product-card>
        `
        ;
        
    }
}

customElements.define('app-container', AppContainer)

//indexabuelo es quien agrupa todos los hijos, es decir, mi nuevo HTML. En el render pongo todo lo que debe de ir en mi HTML.
//El card, solo es un componente