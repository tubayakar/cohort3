import { LightningElement } from 'lwc';

export default class ChildAccMessage extends LightningElement {

    dataToSend='Type here...';

    changeHandler(event){
        this.dataToSent=event.target.value;
        console.log(event);
        console.log(event.target);
        console.log(this.dataToSend);

    }

    clickHandler(){
        console.log('publish event ...');
        const sentthistoParent = new CustomEvent("messagechange",{detail: this.dataToSend});

            //Dispatches the event. 
            this.dispatchEvent(sentthistoParent);
    }



}