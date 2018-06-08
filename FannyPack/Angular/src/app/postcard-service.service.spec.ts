import { TestBed, inject } from '@angular/core/testing';

import { PostcardServiceService } from './postcard-service.service';

describe('PostcardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostcardServiceService]
    });
  });

  it('should be created', inject([PostcardServiceService], (service: PostcardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
