import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {CalendarEvent} from 'angular-calendar';
import {isSameDay, isSameMonth} from 'date-fns';

import {UserDataService} from '../../providers/user-data/user-data.service';
import {AlertController, ModalController} from '@ionic/angular';
import {TimeInputPage} from '../time-input/time-input.page';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.page.html',
    styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

    private user;
    activeDayIsOpen: boolean = true;
    viewDate: Date = new Date();
    view: string = 'week';
    loacale: string = 'gb';
    isDragging: boolean = false;
    refresh: Subject<any> = new Subject();

    constructor(
        private userData: UserDataService,
        private alertController: AlertController,
        private modalController: ModalController,
    ) {
        this.user = userData.getUser();
    }


    ngOnInit() {
    }

    /**
     *
     * @param {string} dateVal
     * @return {Promise<void>}
     */
    async presentModal(dateVal: string): Promise<void> {
        const modal = await this.modalController.create({
            component: TimeInputPage,
            componentProps: {
                currentDate: dateVal
            },
            backdropDismiss: false
        });
        return await modal.present();
    }

    /**
     *
     * @param {Date} date
     * @param {CalendarEvent[]} events
     * @return {Promise<void>}
     */
    async dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): Promise<void> {
        const localeDate: string = new Date(date).toLocaleDateString();

        await this.presentModal(localeDate);

        if (isSameMonth(date, this.viewDate)) {
            this.viewDate = date;
            this.activeDayIsOpen = !((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0);
        }
    }

}
