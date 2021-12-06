import { LitElement, html } from 'lit-element';

export class FeedbackElement extends LitElement {

    static get properties(){
        return{
            msg: { type: Object },
            abierto: { type: Boolean }
        }
    }

    constructor(){
        super()
        this.msg = {
            msg: ''
        };
        this.abierto = false;
    }

    render() {
        // console.log(typeof this.msg)
        // console.log(this.msg.msg)
        // ${this.msg.msg}
        // ${this.msg? 
        //     html`${this.msg.msg}` : 
        //     html` `}
        return html`
            <style>
                div{
                    position: fixed;
                    bottom: 0px;
                    left: 0px;
                    overflow: hidden;
                    height: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #1CACF4;
                    color: white;
                    width: 100%;
                    transition: all 0.7s ease-in;
                    font-size: 1px;
                }

                .abierto{
                    height: 100px;
                    font-size: 2rem;
                }
            </style>
            <div class="${this.abierto ? 'abierto' : ''}">
                ${this.msg? 
                html`${this.msg.msg}` : 
                html` `}
            </div>
        `;
    }


}
customElements.define('feedback-element', FeedbackElement);