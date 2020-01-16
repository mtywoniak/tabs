import { Component, OnInit } from '@angular/core';
import { IContactType } from './contactType';
import { ContactTypeService } from './contactType.service';

@Component({
  selector: 'app-contact-types',
  templateUrl: './contact-types.component.html',
  styleUrls: ['./contact-types.component.scss']
})
export class ContactTypesComponent implements OnInit {
  errorMessage: string;

  contactTypes: IContactType[] = [];

  constructor(private contactTypeService: ContactTypeService) { }

  ngOnInit() {
    this.contactTypeService.getContactTypes().subscribe({
      next: contactTypes => {
        this.contactTypes = contactTypes;
      },
      error: err => this.errorMessage = err
    });
  }

}
