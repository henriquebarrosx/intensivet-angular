import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
    { path: "accounts/sign-in", component: SingInComponent },
    { path: "accounts/sign-up", component: SignUpComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
