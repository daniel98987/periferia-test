import { TestBed, inject } from '@angular/core/testing';
import { AlertService } from './alert.service';
import Swal from 'sweetalert2';

describe('AlertService', () => {
  let alertService: AlertService;
  let swalFireSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertService],
    });

    alertService = TestBed.inject(AlertService);
    swalFireSpy = spyOn(Swal, 'fire');
  });

  it('should be created', () => {
    expect(alertService).toBeTruthy();
  });

  it('should call Swal.fire with correct parameters for success', () => {
    const title = 'Test Title';
    const message = 'Test Message';

    alertService.success(title, message);

    expect(swalFireSpy).toHaveBeenCalledWith({
      title: title,
      text: message,
      icon: 'success',
      showConfirmButton: false,
    });
  });

  // Add more tests for other alert types or custom configurations as needed

  afterEach(() => {
    swalFireSpy.calls.reset();
  });
});
