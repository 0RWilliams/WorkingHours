import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';

import {TimeInputPage} from './time-input.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: TimeInputPage
            }
        ]),
        ReactiveFormsModule
    ],
    declarations: [TimeInputPage]
})
export class TimeInputPageModule {
}
