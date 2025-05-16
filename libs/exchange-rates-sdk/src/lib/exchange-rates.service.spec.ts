import { Test } from '@nestjs/testing';
import { ExchangeRatesService } from './exchange-rates.service';

describe('ExchangeRatesSdkService', () => {
  let service: ExchangeRatesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ExchangeRatesService],
    }).compile();

    service = module.get(ExchangeRatesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
