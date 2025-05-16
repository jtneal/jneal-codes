import { Module } from '@nestjs/common';
import { ExchangeRatesService } from './exchange-rates.service';
import { ExchangeRatesServiceMock } from './exchange-rates.service.mock';

@Module({
  exports: [ExchangeRatesService, ExchangeRatesServiceMock],
  providers: [ExchangeRatesService, ExchangeRatesServiceMock],
})
export class ExchangeRatesModule {}
