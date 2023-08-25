import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './components/logo/logo.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { InputSelectComponent } from './components/input-select/input-select.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SingInComponent,
    SignUpComponent,
    InputSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
