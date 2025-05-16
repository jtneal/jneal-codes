import { Injectable } from '@nestjs/common';
import { ExchangeRatesResponse } from './exchange-rates.interface';
import * as mock from './exchange-rates.mock.json';

@Injectable()
export class ExchangeRatesServiceMock {
  public getExchangeRates(): Promise<ExchangeRatesResponse> {
    return Promise.resolve(mock);
  }
}
