import { Stockbroker } from './Stockbroker';
import { Ticker } from './Ticker';

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
