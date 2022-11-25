import { LitElement, html, css } from 'lit-element';
import { GetData } from './get-data';

export class ListDragons extends LitElement {

    static get styles(){
        return css`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .cards-seccion{
                width: 80%;
                margin: 0 auto;
            }

            h2 { 
                font-size: 22px;
                margin-bottom: 20px;
                text-align: center;
            }

            .cards-container{
                width: 100%;
                height: auto;
                display:flex;  
            }

            .card{
                width: 300px;
                height: 450px;
                margin: 10px;
                padding: 10px;
                background-color:#24303c;
                color: white;
                text-align: center;
                display:flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                border-radius: 10px;
            }

            .card .card-title{
                font-size: 15px;
            
            }
            
            .card .card-img{
                width: 180px;
                height: 220px;
    
            }

            .card .card-description{
                font-size: 11px;
                text-align: center;
            }

            .button-sec{
                width: 20%;
                background: rgb(8, 29, 75);
                border: none;
                border-radius: 5px;
                padding: 12px;
                color: white;
                margin: 16px 0;
                font-size: 16px;
            }

            .button-sec:hover{
                background: #1f53c5;
            }

        `
    }
    
    
    static get properties(){
        return{
            title: {type:String},
            dragons: {type:Array},
        }
    }

    constructor(){
        super();
        this.title = 'Lista Dragones'
        this.dragons = []
    }

    render() {
        return html`
            <div class="cards-seccion">
                <h2>${this.title}</h2>
                <div class="cards-container">
                    ${this.dateTemplate}
                </div>
                <button class="button-sec" @click='${this.callService}'>Ver Info</button>
                <button class="button-sec">Ocultar Info</button>

            </div>
        `;
    }
    
    get dateTemplate(){
        return html`
            ${this.dragons.map( dragon => html`
                <div class="card">
                    <h3 class="card-title">${dragon.name}</h3>
                    <img class="card-img" src="${dragon.img}"> 
                    <p class="card-description">${dragon.description}</p>
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


