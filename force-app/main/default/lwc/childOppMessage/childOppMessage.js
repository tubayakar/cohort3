import { LightningElement } from 'lwc';

export default class ChildOppMessage extends LightningElement {


    dataToSend='type here...';

    changeHandler(event){
        this.dataToSend=event.target.value;

    }

    clickHandler(){
        
        const sentmsgtoParent = new CustomEvent('changemessage', {detail: this.dataToSend});
        this.dispatchEvent(sentmsgtoParent);
    }


}