import { LitElement, html } from 'lit-element';
import './feedback-element';

class MiContador extends LitElement {
    static get properties(){
        return{
            cont: { type: Number},
            msgBanner: { type: Object },
            abierto: { type: Boolean }
        }
    }

    constructor(){
        super()
        this.cont = 0;
        this.msgBanner = {};
        this.abierto = false;
    }
    
    render() {
        return html`
            <p>El contador va en: ${this.cont}</p>
            <button @click="${this.incrementa}">+</button>
            <button @click="${this.decrementar}">-</button>
            <feedback-element id="feed" .msg='${this.msgBanner}' abierto='${this.abierto}'></feedback-element>
        `;
    }

    incrementa(){
        this.cont++;
        if(this.cont == 5){
            this.msgBanner.msg = 'Has llegado a 5'
            this.abierto = true
            setTimeout(() => this.abierto = false, 3000);
        }
    }

    decrementar(){
        this.cont--;
        if(this.cont == 0){
            this.msgBanner.msg = 'Has llegado a 0'
            this.abierto = true
            setTimeout(() => this.abierto = false, 3000);
        }
    }
}
customElements.define('mi-contador', MiContador);