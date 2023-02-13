import { LightningElement,track } from 'lwc';

export default class Hellocomponent extends LightningElement {



    @track cardText = {
        title:'track decorator example',
        body:'card body decorator example',
        footer:'card footer decorator example'
    }

    titleChangeHandler(){

        console.log('Before Click1');
   
        console.log(JSON.stringify(this.cardText));
        this.cardText.title = 'button click';
     
        console.log('After Click1');
        console.log(JSON.stringify(this.cardText));
 
      }

      
    }



