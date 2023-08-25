import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-sing-in',
    templateUrl: './sing-in.component.html',
    styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {
    public signUpPathname: string = "/accounts/sign-up"

    public signInForm: FormGroup = this.formBuilder.group({
        rememberAccess: [false],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.email]],
    });

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    async signIn(event: any): Promise<void> {
        event.preventDefault();

        if (this.signInForm.valid) {

        }
    }
}
