import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStepComponent } from './profile-step.component';

describe('ProfileStepComponent', () => {
    let component: ProfileStepComponent;
    let fixture: ComponentFixture<ProfileStepComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileStepComponent]
        });
        fixture = TestBed.createComponent(ProfileStepComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
