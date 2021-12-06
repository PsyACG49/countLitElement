import { LitElement, html } from 'lit-element';
import { GetData } from './get-data';

export class ListDragons extends LitElement {

    static get properties(){
        return{
            title: {type:String},
            dragons: {type:Array}
        }
    }

    constructor(){
        super();
        this.title = 'Lista Dragones'
        this.dragons = []
    }

    render() {
        return html`
            <h3>${this.title}</h3>
            <button @click='${this.callService}'>boton</button>
            ${this.dateTemplate}
            
        `;
    }
    
    get dateTemplate(){
        return html`
            ${this.dragons.map( dragon => html`
                <div>
                    <h3>${dragon.name}</h3>
                    <img src="${dragon.img}"> 
                    <p>${dragon.description}</p>
                </div>
            `)}   
        `
    }
    
    _dataFormat(data){
        let drags = [];
        data.forEach(drag => {
            drags.push({
                id: drag.id,
                name: drag.name,
                img: drag.flickr_images[2],
                description: drag.description
            })
        });
        this.dragons = drags;
    }
    
    callService(){
        let datos = new GetData();
        datos.url = 'https://api.spacexdata.com/v3/dragons';
        datos.generateRequest()
        datos.addEventListener('DataApi', (data) => {
            this._dataFormat(data.detail.data);
        });
    }
}
customElements.define('list-dragons', ListDragons);


