import { TestBed } from '@angular/core/testing';

import { SentimentConverterService } from './sentiment-converter.service';

describe('SentimentConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SentimentConverterService = TestBed.get(SentimentConverterService);
    expect(service).toBeTruthy();
  });
});
