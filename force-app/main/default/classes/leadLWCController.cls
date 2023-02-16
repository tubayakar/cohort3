/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-16-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class leadLWCController {
    
    //contructor
    public leadLWCController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Lead> retrive(String searchterm){

        List<Lead> multiLead = new List<Lead>();

        String search = '%' + searchterm + '%';


        try {
            
            multiLead =[SELECT Id, FirstName, LastName, Phone 
                        FROM Lead
                        WHERE FirstName LIKE :search
                        ORDER BY CreatedDate DESC];
                

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return multiLead;

    }

    
}