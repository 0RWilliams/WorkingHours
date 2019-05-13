import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-time-input',
    templateUrl: './time-input.page.html',
    styleUrls: ['./time-input.page.scss'],
})
export class TimeInputPage implements OnInit {
    myDate;
    onLeaveValue: string;
    overtimeValue: string;
    taskValue: string;

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
        console.log(`${this.myDate}`);
    }

    onLeaveSegment(value: string) {
        this.onLeaveValue = value;
    }

    overtimeSegment(value: string) {
        this.overtimeValue = value;
    }

    taskDropdown(value: string) {
        this.taskValue = value;
    }

    submitEntry() {
        const entry = {
            onLeave: this.onLeaveValue,
            overtime: this.overtimeValue,
            task: this.taskValue
        };
        console.log(entry);
    }

    closeModal() {
        this.modalCtrl.dismiss();
    }
}
