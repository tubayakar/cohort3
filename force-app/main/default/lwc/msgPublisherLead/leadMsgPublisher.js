import { LightningElement,wire } from 'lwc';

import mc from '@salesforce/messageChannel/mc__c';
import { publish, MessageContext } from 'lightning/messageService';



export default class MsgPublisherLead extends LightningElement {

    dataToPublish='HELLO !';

    changeHandler(event){
        this.dataToPublish=event.target.value;
    }

    @wire(MessageContext)
        messageContext;
    

    publishMessageHandler(event){
      
        event.preventDefault();
        const payload = { recordId: this.dataToPublish };

        publish(this.messageContext, mc, payload);

    }

    
}