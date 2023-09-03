import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar.component';
import { MainComponent } from './components/main/main.component';
import { LovedComponent } from './components/loved/loved.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LeftsidebarComponent,
    MainComponent,
    LovedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
