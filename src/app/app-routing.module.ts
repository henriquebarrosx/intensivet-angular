import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './pages/sing-in/sing-in.component';

const routes: Routes = [
    { path: "accounts/sign-in", component: SingInComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
