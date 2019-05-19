import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';

import {ModalController} from '@ionic/angular';

import {CallStack} from '../../models/call-stack.interface';
import {BankHolidaysService} from '../../providers/bank-holidays/bank-holidays.service';

@Component({
    selector: 'app-time-input',
    templateUrl: './time-input.page.html',
    styleUrls: ['./time-input.page.scss'],
    providers: [BankHolidaysService]
})
export class TimeInputPage implements OnInit, OnDestroy {

    constructor(private modalCtrl: ModalController,
                private bankHolidayService: BankHolidaysService) {
        // empty;
    }

    private destroy$ = new Subject<boolean>();
    leaveForm: FormGroup;
    workingTime: FormGroup;
    currentDate: string;
    timeSpent: string;

    /**
     *
     * @return {CallStack}
     */
    private static callStackHandler(): CallStack {
        return {emitEvent: false, onlySelf: true};
    }

    /**
     * Function to initialise the forms for the modal and to call the onChanges method.
     * @return {void}
     */
    ngOnInit(): void {
        this.getBankHolidays();

        this.workingTime = new FormGroup({
            onLeave: new FormControl({value: null, disabled: false}, Validators.required),
            task: new FormControl({value: null, disabled: false}, Validators.required),
            overtime: new FormControl({value: null, disabled: false}, Validators.required),
            timeSpent: new FormControl({
                value: null,
                disabled: false
            }, Validators.required),
            entryDate: new FormControl({
                value: this.parseLocaleDateStringToJSDate(this.currentDate),
                disabled: false
            }, Validators.required)
        });
        this.onChanges();
    }

    /**
     * Function to unsubscribe from the active subscriptions when the component is destroyed.
     * @return {void}
     */
    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    /**
     * Function to subscribe to the valueChanges of the forms.
     * @return {void}
     */
    onChanges(): void {
        this.workingTime.valueChanges.pipe(takeUntil(this.destroy$), distinctUntilChanged())
            .subscribe(value => {
                console.log(value);

                console.log(this.timeSpent);
                // if (value['onLeave'] === 'false') {
                //     this.workingTime.enable(TimeInputPage.callStackHandler());
                // } else {
                //     this.workingTime.disable(TimeInputPage.callStackHandler());
                // }
                // this.workingTime.get('entryDate').disable();
            });
    }

    /**
     * Function to confirm the value of the form fields.
     * @param {FormGroup} workingTime
     * @return {void}
     */
    submitEntry(workingTime: FormGroup): void {
        console.log(workingTime.value);

        if (workingTime.valid) {
            this.closeModal();
        }
    }

    /**
     * Function to parse a date into the required format (yyyy-mm-dd) so it can be patched into date-time form field.
     * @param {string} dateString
     * @return {string}
     */
    parseLocaleDateStringToJSDate(dateString: string): string {
        return dateString ? dateString.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1') : null;
    }

    /**
     * Function to dismiss the modal controller from the view and to resolve promise.
     * @return {void}
     */
    closeModal(): void {
        this.modalCtrl.dismiss().finally();
    }

    /**
     *
     */
    getBankHolidays() {
        this.bankHolidayService.getBankHolidays()
            .subscribe(result => {
                if (result) {
                    console.log(result);
                }
            }, err => {
                console.warn(err);
            });
    }
}
