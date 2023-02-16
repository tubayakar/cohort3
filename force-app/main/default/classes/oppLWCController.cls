/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-17-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class oppLWCController {
    public oppLWCController() {

    }



    @AuraEnabled
    public static List<Opportunity> retrive(String searchterm){

        List<Opportunity> multiopp = New List<Opportunity>();

        String search = '%' + searchterm + '%';

        try {
            multiopp = [SELECT Id, Name, Amount, Type, CloseDate, StageName
                        FROM Opportunity
                        WHERE Name LIKE :search
                        ORDER BY CloseDate DESC];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

        return multiopp;
    }



}