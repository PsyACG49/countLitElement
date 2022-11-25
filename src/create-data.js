import { LitElement, html } from 'lit-element';
//Data manager
//token sesion
//chai assertion library
export class CreateData extends LitElement {
    
    static get properties(){
        return{
            url: {type:String},
            options: {type:Object}
        }
    }

    constructor(url, options){
        super()
        this.url = url;
        this.options = options;
    }

    generateRequest(){
        fetch(this.url, this.options)
        .then((response) => response.json())
        .then((json) => console.log(json));
    }


}
customElements.define('create-data', CreateData);