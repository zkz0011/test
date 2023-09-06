import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FKMComponent } from './fkm/fkm.component';
import { SixYearComponent } from './six-year/six-year.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FKMComponent,
    SixYearComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
