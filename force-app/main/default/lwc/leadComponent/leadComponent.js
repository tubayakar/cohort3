import { LightningElement,wire,track } from 'lwc';


// import apex class method.
import retrive from '@salesforce/apex/leadLWCController.retrive';



export default class LeadComponent extends LightningElement {

    //wire
    //@wire(retrive) leads;

 
   @track multileads;

   connectedCallback(){

      // imperative

      retrive()
      .then(data=>{

            console.log('retrive Leads....');
            console.log(data);
            this.multileads=data;

      })

      .catch(err=>{
            console.log(err);

      })


   }


}