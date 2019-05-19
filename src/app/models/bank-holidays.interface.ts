export interface BankHolidays {
    englandAndWales: EnglandAndWales;
    scotland: Scotland;
    northernIreland: NorthernIreland;
}

export interface Events {
    title: string;
    date: string;
    notes: string;
    bunting: boolean;
}

export interface EnglandAndWales {
    division: string;
    events: Events[];
}

export interface Scotland {
    division: string;
    events: Events[];
}

export interface NorthernIreland {
    division: string;
    events: Events[];
}
