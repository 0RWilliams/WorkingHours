import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CalendarModule, CalendarMonthModule, CalendarWeekModule} from 'angular-calendar';

import {IonicModule} from '@ionic/angular';

import {CalendarPage} from './calendar.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        CalendarWeekModule,
        CalendarMonthModule,
        CalendarModule,
        RouterModule.forChild([
            {
                path: '',
                component: CalendarPage
            }
        ]),
    ],
    declarations: [CalendarPage]
})
export class CalendarPageModule {
}
