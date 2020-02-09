import { TestBed } from '@angular/core/testing';

import { EmailClientService } from './email-client.service';

describe('EmailClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailClientService = TestBed.get(EmailClientService);
    expect(service).toBeTruthy();
  });
});
