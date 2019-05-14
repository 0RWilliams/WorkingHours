import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor() {
        setInterval(() => {
            this.currentDate = new Date().toLocaleDateString();
        }, 1);
    }

    private currentDate: string;
    public testData: Array<any> = [
        {
            'title': 'Thursday 23rd May 2019',
            'value': '12:33pm'
        },
        {
            'title': 'Thursday 23rd May 2019',
            'value': '12:33pm'
        },
        {
            'title': 'Thursday 23rd May 2019',
            'value': '12:33pm'
        },
        {
            'title': 'Thursday 23rd May 2019',
            'value': '12:33pm'
        },
        {
            'title': 'Thursday 23rd May 2019',
            'value': '12:33pm'
        }
    ];
}
