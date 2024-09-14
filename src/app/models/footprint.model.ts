export interface footprint{
    details_url: string;
    footprint: number;
    offset_prices: [
        {
            amount: number;
            currency: string;
            locale: string;
            offset_url: string;
        }
    ]
}