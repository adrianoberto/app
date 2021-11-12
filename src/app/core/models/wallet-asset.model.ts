import { TradingType } from '@app/core/enums';

interface Event {
    unitPrice: number;
    amount: number;
    totalPrice: number;
    tradingType: TradingType;
}

export interface WalletAsset {
    _id: string;
    avgPrice: number;
    totalPrice: number;
    amount: number;
    events: Event[];
    type: string;
    percent: number;
}