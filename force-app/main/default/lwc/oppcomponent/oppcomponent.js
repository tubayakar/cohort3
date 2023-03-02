import { LightningElement, track } from 'lwc';


//import apex class method.
import retrive from '@salesforce/apex/oppLWCController.retrive';


const columns = [
    { label: 'Opporunity Name', fieldName: 'Name' },
    { label: 'Amount', fieldName: 'Amount', type: 'currency' },
    { label: 'Stage', fieldName: 'StageName', type: 'picklist' },
    { label: 'Close Date', fieldName: 'CloseDate', type: 'date' },
    { label: 'Type', fieldName: 'Type', type: 'picklist' },
];


export default class Oppcomponent extends LightningElement {

@track multiopp;
searchText;
columns = columns;

renderedCallback(){
    console.log(this.opportunities);
}

textChangeHandler(event){
    this.searchText=event.target.value;
    console.log(this.searchText);

    //imperative

    retrive({
        searchterm:this.searchText
    })

    .then(data=>{
        console.log('retrived Opportunities');
        console.log(data);
        this.multiopp=data;
    })

    .catch(err=>{
        console.log(err);
    })

}



connectedCallback() {
    console.log('connected callback is running...')
}


}
