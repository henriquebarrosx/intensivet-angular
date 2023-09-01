import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'user-register-modal',
    templateUrl: './user-register-modal.component.html',
    styleUrls: ['./user-register-modal.component.scss']
})
export class UserRegisterModalComponent {
    @Input() isOpened: boolean = true
    @Input() formGroup!: FormGroup
    @Output() onClose = new EventEmitter()

    closeModal(): void {
        this.onClose.emit()
    }
}
