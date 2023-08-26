import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { InputSelectOption } from "../../entities/InputSelectOption";

@Component({
    selector: "app-sign-up",
    templateUrl: "./sign-up.component.html",
    styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent {
    constructor(private formBuilder: FormBuilder) { }

    public profiles = [
        new InputSelectOption("clinic", "Clínica"),
        new InputSelectOption("vet", "Veterinário"),
        new InputSelectOption("tutor", "Tutor"),
    ]

    public firstStepForm = this.formBuilder.group({
        profile: [this.profiles[0], [Validators.required]],
    })

    public secondStepForm = this.formBuilder.group({
        fullName: ["", [Validators.required]],
        phoneNumber: ["", [Validators.required]],
        companyName: ["", [Validators.required]],
        state: ["", [Validators.required]],
        city: ["", [Validators.required]],
    })

    public thirdStepForm = this.formBuilder.group({
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required]],
    })

    public signInPathname: string = "/accounts/sign-in"
    public isReturnButtonVisible: boolean = false

    public currentFormGroupStep: number = 1
    public isFirstStep = this.currentFormGroupStep === 1
    public iSecondStep = this.currentFormGroupStep === 2
    public isThirdStep = this.currentFormGroupStep === 3

    onProfileSelect(selectedProfile: string): void {
        const profileValue = this.profiles.find((profile) => profile.value === selectedProfile)!
        const profileField = this.firstStepForm.get("profile")!
        profileField.setValue(profileValue)
    }

    advanceToNextStep(): void {
        this.currentFormGroupStep++
    }

    returnToPreviousStep(): void {
        this.currentFormGroupStep--
    }

    async signUp(event: any): Promise<void> {
        event.preventDefault();
    }
}
