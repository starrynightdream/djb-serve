import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DjbsComponent } from './djbs/djbs.component';

import { FormsModule } from '_@angular_forms@12.0.1@@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DjbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
