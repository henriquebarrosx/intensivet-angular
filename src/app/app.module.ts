import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './components/logo/logo.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { ProfileStepComponent } from './pages/sign-up/components/profile-step/profile-step.component';
import { UserRegisterModalComponent } from './pages/sign-up/components/user-register-modal/user-register-modal.component';
import { ClinicFormComponent } from './pages/sign-up/components/clinic-form/clinic-form.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [
        AppComponent,
        SingInComponent,
        SignUpComponent,
        ProfileStepComponent,
        UserRegisterModalComponent,
        ClinicFormComponent,

        // Shared
        LogoComponent,
        ModalComponent,
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
