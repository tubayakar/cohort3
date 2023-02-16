import { LightningElement,wire,track } from 'lwc';


// import apex class method.
import retrive from '@salesforce/apex/leadLWCController.retrive';



export default class LeadComponent extends LightningElement {


      @track multileads;

      searchText;


    //wire
    @wire(retrive,{searchterm: '$searchText'}) leads;

 
      renderedCallback(){

            console.log(this.leads);
      }


      textChangeHandler(){
            this.searchText = event.target.value;
            console.log(this.searchText);
      }


            connectedCallback(){
                  
            }


}