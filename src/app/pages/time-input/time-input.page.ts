import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SubmitEntry} from '../../models/submit-entry.interface';

@Component({
    selector: 'app-time-input',
    templateUrl: './time-input.page.html',
    styleUrls: ['./time-input.page.scss'],
})
export class TimeInputPage implements OnInit {

    currentDate: Date;
    onLeaveValue: string;
    overtimeValue: string;
    taskValue: string;

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
        console.log(`${this.currentDate}`);
    }

    /**
     *
     * @param {string} value
     */
    setLeaveSegment(value: string): void {
        this.onLeaveValue = value;
    }

    /**
     *
     * @param {string} value
     */
    setOvertimeSegment(value: string): void {
        this.overtimeValue = value;
    }

    /**
     *
     * @param {string} value
     */
    setTaskDropdown(value: string): void {
        this.taskValue = value;
    }

    /**
     *
     * @return {SubmitEntry}
     */
    submitEntry(): SubmitEntry {
        return {
            onLeave: this.onLeaveValue,
            overtime: this.overtimeValue,
            task: this.taskValue
        };
    }

    /**
     *
     */
    closeModal(): void {
        this.modalCtrl.dismiss();
    }
}
