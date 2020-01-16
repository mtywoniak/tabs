import { IContact } from '../contacts/contact';

export interface IContractType {
    Id : number
    Name : string
    Contacts : Array<IContact>
}