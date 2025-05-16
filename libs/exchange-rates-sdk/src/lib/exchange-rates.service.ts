import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';
import { ExchangeRatesResponse } from './exchange-rates.interface';

@Injectable()
export class ExchangeRatesService {
  public constructor(private readonly http: HttpService) {}

  public getExchangeRates(): Promise<ExchangeRatesResponse> {
    const url =
      'https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange?fields=country,currency,exchange_rate&filter=record_date:eq:2025-03-31&page[size]=200';

    return firstValueFrom(
      this.http
        .get<ExchangeRatesResponse>(url)
        .pipe(map((response) => response.data))
    );
  }
}
