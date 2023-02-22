import { LightningElement } from 'lwc';

export default class Leadregistration extends LightningElement {
    
singleLead={
  FirstName:'',
  LastName:'',
  Phone:'',
  Email:'',
  Country:'',
  Info_Session_Date_Time__c:null
};

    //  Interested_Path__c, Info_Session_Date_Time__c, LastName, FirstName, Country, Email, Phone
    inputChangeHandler(event){
    console.log(event.target.name);
    console.log(event.target.value);
    }
}