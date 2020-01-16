import { ILegalEntityData } from '../legal-entities-data/legalEntityData';

export interface ILegalEntityType {
    Id : number
    Name : string
    LegalEntities : Array<ILegalEntityData>
}