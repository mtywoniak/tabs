import { IContact } from '../contacts/contact';

export interface IContactType {
    Id: number,
    Name: string,
    Contacts: Array<IContact>
}