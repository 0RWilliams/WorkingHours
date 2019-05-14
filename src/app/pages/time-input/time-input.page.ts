import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-time-input',
    templateUrl: './time-input.page.html',
    styleUrls: ['./time-input.page.scss'],
})
export class TimeInputPage implements OnInit {

    validateLeave: FormGroup;
    validateHours: FormGroup;
    currentDate: string;

    constructor(private modalCtrl: ModalController) {
        // empty;
    }

    ngOnInit() {
        this.validateLeave = new FormGroup({
            onLeave: new FormControl({value: null, disabled: false}, Validators.required)
        });

        this.validateHours = new FormGroup({
            task: new FormControl({value: null, disabled: true}, Validators.required),
            overtime: new FormControl({value: null, disabled: true}, Validators.required),
            timeSpent: new FormControl({value: 0, disabled: true}, Validators.compose([Validators.required,
                Validators.pattern('\d{2}:\d{2}')])),
            entryDate: new FormControl({
                value: this.parseLocaleDateStringToJSDate(this.currentDate),
                disabled: true
            }, Validators.required)
        });

        this.onChanges();
    }


    onChanges(): void {
        this.validateLeave.valueChanges.subscribe(value => {
            if ((value['onLeave'] === 'no')) {
                this.validateHours.enable();
            } else {
                this.validateHours.disable();
            }
        });

        this.validateHours.valueChanges.subscribe(value => {

        });
    }

    submitEntry(validation: FormGroup): void {
        console.log(validation.value);
        if (validation.valid) {
            this.closeModal();
        }

    }


    parseLocaleDateStringToJSDate(dateString: string, timeString?: string): string {
        return dateString.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1');
    }

    closeModal(): void {
        this.modalCtrl.dismiss().finally();
    }
}
