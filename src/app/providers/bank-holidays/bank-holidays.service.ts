import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {BankHolidays} from '../../models/bank-holidays.interface';

@Injectable({
    providedIn: 'root'
})
export class BankHolidaysService {

    constructor(private http: HttpClient) {
    }

    getBankHolidays(): Observable<BankHolidays> {

        const headers = new HttpHeaders()
            .set('x-api-key', this.endpoint.key)
            .set('Content-Type', 'application/json');

        return this.http.get<BankHolidays>('../assets/bank-holidays.json', {})
            .pipe(map(results => results));
    }
}
