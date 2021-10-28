export interface Ticker {
    _id: string;
    tradingCode: string,
    category: Category
}

interface Category {
    _id: string,
    type: string
}