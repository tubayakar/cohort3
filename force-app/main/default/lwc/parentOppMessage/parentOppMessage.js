import { LightningElement } from 'lwc';

export default class ParentOppMessage extends LightningElement {
    comedchildmessage;

    messageReceivedfromChild(event){
        this.comedchildmessage=event.detail;
    }
}