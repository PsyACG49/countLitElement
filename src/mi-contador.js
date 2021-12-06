import { LitElement, html } from 'lit-element';
import './feedback-element';
import './lista-comp';

class MiContador extends LitElement {
    static get properties(){
        return{
            cont: { type: Number},
            msgBanner: { type: String },
            abierto: { type: Boolean },
            listPersons: { type: Array }
        }
    }

    constructor(){
        super()
        this.cont = 0;
        this.msgBanner = {};
        this.listPersons = ['Ana', 'Lorena', 'Vanessa', 'Sergio', 'Ricardo']
        this.abierto = false;
    }
    
    render() {
        return html`
            <p>El contador va en: ${this.cont}</p>
            <button @click="${this.incrementa}">+</button>
            <button @click="${this.decrementar}">-</button>
            <feedback-element .msg='${this.msgBanner}' ?abierto='${this.abierto}'></feedback-element>
            <lista-comp .persons='${this.listPersons}'></lista-comp>
        `;
    }

    incrementa(){
        this.cont++;
        if(this.cont == 5){
            this.msgBanner.msg = 'Has llegado a 5'
            this.abierto = true
            setTimeout(() => this.abierto = false, 1000);
        }
    }

    decrementar(){
        this.cont--;
        if(this.cont == 0){
            this.msgBanner.msg = 'Has llegado a 0'
            this.abierto = true
            setTimeout(() => this.abierto = false, 1000);
        }
    }
}
customElements.define('mi-contador', MiContador);