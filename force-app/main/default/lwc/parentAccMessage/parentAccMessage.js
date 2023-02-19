import { LightningElement } from 'lwc';

export default class ParentAccMessage extends LightningElement {


    
    childmessage;

    messageReceivedFromChild(event){
        console.log('message is received froö child component...');
        console.log(event.detail);
        this.childmessage=event.detail;

    }

}