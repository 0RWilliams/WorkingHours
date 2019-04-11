import {Component, OnInit} from '@angular/core';
import {UserDataService} from "../user-data.service";
import {Subject} from "rxjs";

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.page.html',
    styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
    private user;
    viewDate: Date = new Date();
    view = 'week';
    loacale = 'gb';
    isDragging = false;

    refresh: Subject<any> = new Subject();



    constructor(private userData: UserDataService) {
        this.user = userData.getUser();
    }

    ngOnInit() {
    }
}
