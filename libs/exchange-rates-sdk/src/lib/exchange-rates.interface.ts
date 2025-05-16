export interface ExchangeRate {
  country: string;
  currency: string;
  exchange_rate: string;
}

export interface ExchangeRatesResponse {
  data: ExchangeRate[];
  meta: { labels: ExchangeRate };
}
