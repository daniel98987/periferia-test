import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {


  public success(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      showConfirmButton: false,
    });
  }


}
