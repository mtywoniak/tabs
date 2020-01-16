import { IContactType } from '../contact-types/contactType';
import { IContractType } from '../contract-types/contractType';
import { ILegalEntityData } from '../legal-entities-data/legalEntityData';

export interface IContact {
    Id : number
    FirstName : string
    MiddleName : string
    LastName : string
    Name : string
    AddressLine1 : string
    AddressLine2 : string
    Phone : string
    Email : string
    AdditionalInfo : string
    ContactTypeId : number
    ContactType : IContactType
    ContractTypeId : number
    ContractType : IContractType
    IsPersonToContact : boolean
    IsPersonToRepresent : boolean
    LegalEntityDataId : number
    LegalEntityData : ILegalEntityData
}