import { TestBed } from '@angular/core/testing';

import { TranscriptionProviderService } from './transcription-provider.service';

describe('TranscriptionProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranscriptionProviderService = TestBed.get(TranscriptionProviderService);
    expect(service).toBeTruthy();
  });
});
