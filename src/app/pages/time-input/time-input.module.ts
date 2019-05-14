import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';

import {TimeInputPage} from './time-input.page';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: TimeInputPage
            }
        ]),
        ReactiveFormsModule,
    ],
    declarations: [TimeInputPage]
})
export class TimeInputPageModule {
}
