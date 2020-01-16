import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseComponent } from './case/case.component';
import { ErrorComponent } from './error/error.component';
import { ContactTypesComponent } from './contact-types/contact-types.component';


const routes: Routes = [
  {path: 'cases', component: CaseComponent},
  {path: 'contactTypes', component: ContactTypesComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
