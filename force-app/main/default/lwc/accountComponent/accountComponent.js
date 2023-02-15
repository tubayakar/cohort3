import { LightningElement,wire,track } from 'lwc';

 // import apex classs method.

import retrive from '@salesforce/apex/accountLWCController.retrive';


const columns = [
    { label: 'Company Name', fieldName: 'Name' },
    { label: 'Website', fieldName: 'Website', type: 'url' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Industry', fieldName: 'Industry' },
];


export default class AccountComponent extends LightningElement {

    // properties
    @track multiaccounts;

    searchText;
    columns=columns;



    // wire
    // @wire(retrive,{searchterm:'$searchText'}) accounts;

    renderedCallback(){
        console.log(this.accounts);
    }


    textChangeHandler(event){

        this.searchText=event.target.value;
        console.log(this.searchText);
    

        // imperative

        retrive({
            searchterm:this.searchText
        })


        .then(data=>{
            console.log('retrived Accounts');
            console.log(data);
            this.multiaccounts=data;

        })

        .catch(err=>{
            console.log(err);

        })

    }

    connectedCallback(){

    console.log('connected callback is running...');

   }
   
    

}