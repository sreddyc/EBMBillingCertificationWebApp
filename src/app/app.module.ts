import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {InvoicedateselectionComponent} from './invoicedateselection/invoicedateselection.componenet';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { PoolpickerComponent } from './poolpicker/poolpicker.component';
import { PoolselectionComponent } from './poolselection/poolselection.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CertificationprogressComponent } from './certificationprogress/certificationprogress.component';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [	InvoicedateselectionComponent,
      PoolpickerComponent,
      PoolselectionComponent,
      CertificationprogressComponent,
      ModalComponent
   ],
  imports: [
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [InvoicedateselectionComponent, PoolpickerComponent, PoolselectionComponent, CertificationprogressComponent],
})
export class AppModule {}
