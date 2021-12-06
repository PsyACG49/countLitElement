import { LitElement, html } from 'lit-element';

export class CreateData extends LitElement {

    static get properties(){
        return{
            url: {type:String},
            options: {type:Object}
        }
    }

    constructor(){
        super()
        this.url = '';
        this.options = {}
    }

    generateRequest(){
        fetch(this.url, this.options)
        .then((response) => response.json())
        .then((json) => console.log(json));
    }


}
customElements.define('create-data', CreateData);