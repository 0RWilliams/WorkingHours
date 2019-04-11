import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor() {
        setInterval(() => {
            this.currentDate = new Date();
        }, 1)
    }

    private currentDate: Date;
    public testData: Array<any> = [
        {
            "title": "Thursday 23rd May 2019",
            "value": "12:33pm"
        },
        {
            "title": "Thursday 23rd May 2019",
            "value": "12:33pm"
        },
        {
            "title": "Thursday 23rd May 2019",
            "value": "12:33pm"
        },
        {
            "title": "Thursday 23rd May 2019",
            "value": "12:33pm"
        },
        {
            "title": "Thursday 23rd May 2019",
            "value": "12:33pm"
        }];
}
