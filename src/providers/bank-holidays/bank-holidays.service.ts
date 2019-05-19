import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BankHolidays} from '../../models/bank-holidays.interface';

@Injectable({
    providedIn: 'root'
})
export class BankHolidaysService {

    constructor(private http: HttpClient) {
    }

    /**
     *
     * @return {Observable<BankHolidays>}
     */
    getBankHolidays(): Observable<BankHolidays> {
        return this.http.get<BankHolidays>('assets/bank-holidays.json');
    }
}
