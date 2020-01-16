import { IContact } from '../contacts/contact';
import { ILegalEntityType } from '../legal-entity-types/legalEntityType';

export interface ILegalEntityData {
    Id : number
    Name : string
    Type : string
    NIP : number
    REGON : number
    KRS : number
    LegalEntityTypeId : number
    LegalEntityType : ILegalEntityType
    Contacts : Array<IContact>
}