import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputSelectOption } from '../../entities/InputSelectOption';

@Component({
    selector: 'input-select',
    templateUrl: './input-select.component.html',
    styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent {
    @Input() id: string = ""
    @Input() label: string = ""
    @Input() value: string = ""
    @Input() options: InputSelectOption[] = []
    @Input() placeholder: string = "Selecione uma opção"
    @Output() onSelect = new EventEmitter<InputSelectOption>();

    onChange(event: any) {
        const value = event.target.value
        const matchedOption = this.options.find((option) => option.value === value)
        this.onSelect.emit(matchedOption)
    }
}
