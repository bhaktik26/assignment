import { TestBed } from '@angular/core/testing';
import { EducationDataService } from './education-data.service';


describe('EducationDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EducationDataService = TestBed.get(EducationDataService);
    expect(service).toBeTruthy();
  });
});
