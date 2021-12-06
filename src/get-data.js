import { LitElement, html } from 'lit-element';

export class GetData extends LitElement {

    //Propiedades del componente
    static get properties(){
        return {
            url: {type:String},
        };
    }

    //Metodo constructor para inicializar las varibles 
    constructor(){
        super()
        this.url = ''
    }

    //Funcion que establece la data mediante un evento
    _setData(data){
        this.dispatchEvent(new CustomEvent('DataApi', {
            detail: { data },
            bubbles: true,
            composed: true
        }));
    }

    //Metodo para realizar la peticion GET
    generateRequest(){
        fetch(this.url)
            .then(response => response.json())
            .then(data => this._setData(data))
            .catch(err => console.log(err))
    }
}
customElements.define('get-data', GetData);