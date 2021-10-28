export enum TradingType {
    buy = "Compra",
    sell = "Venda"
}

export function TradingTypeValue(value: string) {    
    return TradingType[value  as keyof typeof TradingType];
}