import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { routing } from './app.routing';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SearchComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }