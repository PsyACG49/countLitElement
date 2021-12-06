import { LitElement, html } from 'lit-element';
import { CreateData } from './create-data';

export class FormIn extends LitElement {

    
    
    render() {
        return html`
            <form @submit=${this.getDatos}>
                <label>Nombre</label>
                <input id="name" placeholder="Ingresa tu nombre" type="text" >
                <label>Apellido</label>
                <input id="lastName" placeholder="Ingresa tu apellido" type="text" >
                <label>Edad</label>
                <input id="age" placeholder="Ingresa tu edad" type="number" >
                <button type="submit">Enviar</button>
            </form>
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
        const postData = new CreateData()
        postData.url = 'http://localhost:3000/Personas';
        postData.options = {
            method:"POST",
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify(per)
        }
        postData.generateRequest()
    }

}
customElements.define('form-in', FormIn);