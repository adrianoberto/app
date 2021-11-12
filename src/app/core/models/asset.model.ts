import { Stockbroker } from './stockbroker.model';
import { Ticker } from './ticker.model';

export interface Asset {    
    _id?: string;
    walletId: string,
    stockbroker: Stockbroker;
    ticker: Ticker;
    tags: string[];
    amount: number,
    unitPrice: number;
    totalPrice: number;
    date: string;
    tradingType: string;
}
