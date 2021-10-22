export interface Event {
    unitPrice: number;
    amount: number;
    totalPrice: number;
    tradingType: string;
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