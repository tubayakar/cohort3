import { LightningElement,wire } from 'lwc';

import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext
} from 'lightning/messageService';

import mc from '@salesforce/messageChannel/mc__c';

export default class ConMsgSubscriber extends LightningElement {

    datareceived;

    @wire(MessageContext)
    messageContext;

    // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                mc,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    
    unsubscribeToMessageChannel() {
    unsubscribe(this.subscription);
    this.subscription = null;
}

  // Handler for message received by component
     handleMessage(message) {
    this.datareceived = message.recordId;
}

 // Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
    connectedCallback() {
    this.subscribeToMessageChannel();
}

    disconnectedCallback() {
    this.unsubscribeToMessageChannel();
}

    renderedCallback(){
    console.log('renderedCallback is running...');
}

  

}