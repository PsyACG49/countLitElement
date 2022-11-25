import { LitElement, html, css } from 'lit-element';
import { CreateData } from './create-data';

export class FormIn extends LitElement {

    static get styles() {
        return css`
            :host{
                border: 1px solid red;
                display:block;
            }  

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            h2 { 
                font-size: 22px;
                margin-bottom: 20px;
                text-align: center;
            }
            .form-container{
                width: 400px;
                background: #24303c;
                padding: 30px;
                margin: 0 auto;
                margin-top: 100px;
                border-radius: 10px;
                font-family: 'calibri';
                color: white;
                box-shadow: 7px 13px 37px #000;
            }

            .input-from{
                width: 100%;
                background: #24303c;
                padding: 10px;
                border-radius: 4px;
                margin-bottom: 16px;
                border: 1px solid #1f53c5;
                font-family: 'calibri';
                font-size: 18px;
                color: white;
            }

            .button-from{
                width: 100%;
                background: rgb(8, 29, 75);
                border: none;
                border-radius: 5px;
                padding: 12px;
                color: white;
                margin: 16px 0;
                font-size: 16px;
            }

            .button-from:hover{
                background: #1f53c5;
            }

            .success{
                background: green;
            }

            .error{
                background: red;
            }
        `;
    }

    static get properties(){
        return{
            inputs: {type: Array},
            classButton: {type:String}
        }
    }
    constructor(){
        super()
        this.inputs = []
        this.classButton ="success";
    }
    
    render() {
        return html`
            <div class="form-container">
                <h2>Formulario POST</h2>
                <form class="cont-form" @submit=${this.getDatos}>
                    ${this.inputs.map( input => {
                        return html`
                            <input class="input-from" placeholder="${input.placeholder}" type="${input.type}"/>
                        `
                    })}
                    <button class="button-from ${this.classButton}" type="submit">Enviar</button>
                </form>
            </div>
        `;
    }

    getDatos(e){
        e.preventDefault()
        let person = {
            name: e.target["name"].value,
            lastName:e.target["lastName"].value,
            age:e.target["age"].value
        }
        this.sendData(person);
    }

    
    sendData(per){
        const url = 'http://localhost:3000/Personas';
        const options = {
            method:"POST",
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify(per)
        }
        const postData = new CreateData(url, options);
        postData.generateRequest()
    }

}
customElements.define('form-in', FormIn);