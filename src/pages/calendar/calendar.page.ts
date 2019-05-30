import {Component, OnInit} from '@angular/core';
import {CalendarEvent, CalendarMonthViewDay, CalendarView} from 'angular-calendar';
import {isSameDay, isSameMonth} from 'date-fns';

import {UserDataService} from '../../providers/user-data/user-data.service';
import {AlertController, ModalController} from '@ionic/angular';
import {TimeInputPage} from '../time-input/time-input.page';

import {BankHolidaysService} from '../../providers/bank-holidays/bank-holidays.service';
import {BankHolidays} from '../../models/bank-holidays.interface';
import {RecurringEvent} from '../../models/recurring-events.interface';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.page.html',
    styleUrls: ['./calendar.page.scss'],
    providers: [BankHolidaysService]
})


export class CalendarPage implements OnInit {

    constructor(
        private userData: UserDataService,
        private alertController: AlertController,
        private modalController: ModalController,
        private bankHolidayService: BankHolidaysService,
    ) {
        this.user = userData.getUser();
    }

    private static bankHolidays = [];

    private user;
    private activeDayIsOpen: boolean = true;
    public viewDate: Date = new Date();
    public excludeDays: number[] = [0, 6];
    public view: CalendarView = CalendarView.Month;
    private monthNames: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    private bankHolidayData: BankHolidays;
    private recurringEvents: RecurringEvent[] = [];
    private isValidDate = dateString => new Date(dateString).toString() !== 'Invalid Date';


    ngOnInit() {
        this.getBankHolidays();
    }

    /**
     *
     * @return {string}
     */
    private getMonthYear(): string {
        return this.monthNames[this.viewDate.getMonth()] + ' ' + this.viewDate.getFullYear();
    }

    /**
     *
     * @return {string}
     */
    private getCurrentMonth(): string {
        return this.monthNames[this.viewDate.getMonth()];
    }

    /**
     *
     * @return {string}
     */
    private getPreviousMonth(): string {
        return this.monthNames[this.viewDate.getMonth() - 1];
    }

    /**
     *
     * @return {string}
     */
    private getNextMonth(): string {
        return this.monthNames[this.viewDate.getMonth() + 1];
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

    /**
     *
     */
    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }

    /**
     *
     */
    getBankHolidays() {
        this.bankHolidayService.getBankHolidays()
            .subscribe(result => {
                if (result) {
                    this.bankHolidayData = result;
                    this.getEventDates(this.bankHolidayData);
                } else {
                    this.bankHolidayData = null;
                }
            }, error => {
                console.warn(error);
            });
    }

    /**
     *
     * @param {MonthViewDay[]} body
     */
    beforeMonthViewRender({body}: { body: CalendarMonthViewDay[] }): void {
        body.forEach(day => {
            if (this.isValidDate(new Date(day.date))) {
                day.cssClass = 'cal-disabled';
            }
        });
    }

    /**
     *
     * @param {BankHolidays} bankHolidayData
     * @return {BankHolidays[]}
     */
    getEventDates(bankHolidayData: BankHolidays): BankHolidays[] {
        if (bankHolidayData && bankHolidayData['england-and-wales']) {
            const englandWalesBankHolidays = bankHolidayData['england-and-wales'].events;

            if (englandWalesBankHolidays) {
                englandWalesBankHolidays.forEach(holiday => {
                    if (holiday.date) {
                        if (this.isValidDate(new Date(holiday.date))) {
                            CalendarPage.bankHolidays.push(holiday);
                        }
                    }
                });
            }
        }
        console.log(CalendarPage.bankHolidays);
        return CalendarPage.bankHolidays;
    }
}
