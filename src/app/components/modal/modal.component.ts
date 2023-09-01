import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    @Input() isOpened: boolean = true
    @Input() position: "left" | "right" = "right"
    @Output() onClose = new EventEmitter()

    close(): void {
        this.onClose.emit()
    }
}
