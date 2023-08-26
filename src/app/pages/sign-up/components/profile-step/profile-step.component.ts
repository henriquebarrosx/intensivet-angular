import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputSelectOption } from '../../../../entities/InputSelectOption';

@Component({
    selector: 'profile-step',
    templateUrl: './profile-step.component.html',
    styleUrls: ['./profile-step.component.scss']
})
export class ProfileStepComponent {
    @Input() formGroup!: FormGroup
    @Input() options: InputSelectOption[] = []
    @Output() onSelect = new EventEmitter<string>()

    public value: string = ""

    ngOnInit(): void {
        const profileField = this.formGroup?.get("profile")?.value
        this.value = profileField?.value;
    }

    getProfileDescription(): string {
        const profiles: Record<string, string> = {
            clinic: "Se você representa uma clínica veterinária ou estabelecimento de saúde animal.",
            vet: "Se você é um profissional de medicina veterinária, seja autônomo ou vinculado a uma clínica.",
            tutor: "Se você é o cuidador de um ou mais animais de estimação e está buscando assistência veterinária à distância.",
        }

        return profiles[this.value]
            ?? "Escolha o perfil que mais se adere a suas necessidades."
    }

    onProfileSelect(value: string) {
        this.value = value
        this.onSelect.emit(value)
    }
}
