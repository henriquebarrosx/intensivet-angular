import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'clinic-form',
    templateUrl: './clinic-form.component.html',
    styleUrls: ['./clinic-form.component.scss']
})
export class ClinicFormComponent {
    @ViewChild('userAvatarFieldset', { static: false }) userAvatarFieldset!: ElementRef;

    chooseAvatarImg(): void {
        this.userAvatarFieldset.nativeElement.click()
    }
}
