export interface RecurringEvent {
    title: string;
    color: any;
    rrule?: RRule;
}

export interface RRule {
    freq: any;
    bymonth?: number;
    bymonthday?: number;
    byweekday?: any;
}
