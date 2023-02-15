/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-15-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class leadLWCController {
    
    //contructor
    public leadLWCController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Lead> retrive(){

        List<Lead> multiLead = new List<Lead>();

        try {
            
            multiLead = [SELECT Id, FirstName, LastName, Phone, LeadSource
                         FROM Lead 
                         WHERE LeadSource = 'Web'
                         ORDER BY CreatedDate DESC
                         LIMIT 5];

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return multiLead;

    }

    
}