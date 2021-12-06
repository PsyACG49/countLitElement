import { LitElement, html } from 'lit-element';

export class ListaComp extends LitElement {

    static get properties(){
        return{
            title: { type: String},
            persons: { type: Array}
        };
    }

    constructor(){
        super()
        this.title = 'Lista de Personas';
        this.persons = [];
    }

    render() {
        return html`
            <h3>${this.title}</h3>
            <ul>
                ${this.persons.map(person => html`<li>${person}</li>`)}
            </ul>
        `;
    }
}
customElements.define('lista-comp', ListaComp);