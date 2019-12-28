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

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    CaseComponent,
    CourseOfActionComponent,
    AddDocumentComponent,
    GenerateDocumentComponent,
    CloseCaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
