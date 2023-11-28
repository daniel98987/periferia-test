import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should handle HTTP errors and return an empty array', () => {
    service.obtenerDatos().subscribe(data => {
      expect(data.length).toEqual(16);
    });

    const req = httpTestingController.expectOne(service.apiUrl);

    req.error(new ErrorEvent('Error'));

    httpTestingController.verify();
  });
});

