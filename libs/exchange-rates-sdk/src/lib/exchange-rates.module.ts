import { Module } from '@nestjs/common';
import { ExchangeRatesService } from './exchange-rates.service';
import { ExchangeRatesServiceMock } from './exchange-rates.service.mock';
import { HttpModule } from '@nestjs/axios';

@Module({
  exports: [ExchangeRatesService, ExchangeRatesServiceMock],
  imports: [HttpModule],
  providers: [ExchangeRatesService, ExchangeRatesServiceMock],
})
export class ExchangeRatesModule {}
