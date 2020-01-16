import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule, MatInputModule } from '@angular/material';
import { CaseComponent } from './case/case.component';
import { CourseOfActionComponent } from './course-of-action/course-of-action.component';
import { MatTableModule, MatSelectModule } from '@angular/material';
import { AddDocumentComponent } from './add-document/add-document.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { GenerateDocumentComponent } from './generate-document/generate-document.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CloseCaseComponent } from './close-case/close-case.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule, MatSidenavModule, MatListModule} from  '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import { ContactTypesComponent } from './contact-types/contact-types.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LegalEntitiesDataComponent } from './legal-entities-data/legal-entities-data.component';
import { LegalEntityTypesComponent } from './legal-entity-types/legal-entity-types.component';
import { ContractTypesComponent } from './contract-types/contract-types.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    CaseComponent,
    CourseOfActionComponent,
    AddDocumentComponent,
    GenerateDocumentComponent,
    CloseCaseComponent,
    NavbarComponent,
    ErrorComponent,
    ContactTypesComponent,
    ContactsComponent,
    LegalEntitiesDataComponent,
    LegalEntityTypesComponent,
    ContractTypesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
