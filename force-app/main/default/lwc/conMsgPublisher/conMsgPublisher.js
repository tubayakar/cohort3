import { LightningElement,wire } from 'lwc';

import mc from '@salesforce/messageChannel/mc__c';
import { publish, MessageContext } from 'lightning/messageService';


export default class ConMsgPublisher extends LightningElement {

    datatoPublish='This is a published message for subscriber component... ';

    @wire(MessageContext)
    messageContext;
    
    

    publishmessageHandler(event){
        event.preventDefault();

        const payload = { recordId : this.datatoPublish};
        
        publish(this.messageContext, mc, payload);

    }

}