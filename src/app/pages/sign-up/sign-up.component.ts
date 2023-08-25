import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputSelectOption } from '../../entities/InputSelectOption';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
    public signInPathname: string = "/accounts/sign-in"

    public profiles = [
        new InputSelectOption("clinic", "Clínica"),
        new InputSelectOption("vet", "Veterinário"),
        new InputSelectOption("tutor", "Tutor"),
    ]

    public signUpForm: FormGroup = this.formBuilder.group({
        profile: [, [Validators.required]],
        fullName: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required]],
        phoneNumber: ["", [Validators.required]],
        state: ["", [Validators.required]],
        city: ["", [Validators.required]],
        companyName: ["", [Validators.required]],
    });

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    getProfileDescriptionType(): string {
        const profileField = this.signUpForm.get("profile")
        const selectedProfileTypeValue = profileField?.value?.value

        const profiles: Record<string, string> = {
            clinic: "Se você representa uma clínica veterinária ou estabelecimento de saúde animal.",
            vet: "Se você é um profissional de medicina veterinária, seja autônomo ou vinculado a uma clínica.",
            tutor: "Se você é o cuidador de um ou mais animais de estimação e está buscando assistência veterinária à distância.",
        }

        return profiles[selectedProfileTypeValue]
            ?? "Escolha o perfil que mais se adere a suas necessidades."
    }

    onProfileSelect(selectedProfile: InputSelectOption): void {
        const profileField = this.signUpForm.get("profile")!
        profileField.setValue(selectedProfile)
    }

    async signUp(event: any): Promise<void> {
        event.preventDefault();

        if (this.signUpForm.valid) {

        }
    }
}
