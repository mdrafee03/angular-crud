import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableModule } from './data-table/data-table.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Material } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiUrlInterceptor } from './api-url.interceptor';
import { DialogModule } from './dialog/dialog.module';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    DialogModule,
    Material,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
