import { AlertService } from './alert.service';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { namesAplication, namesDepartments } from './data/user-data';
import { User } from '../interfaces/user';
import { Injectable, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http'; // <----
@Injectable({
  providedIn: 'root',
})
export class UserService {
  

  apiUrl: string = '';
  constructor(protected http: HttpClient, public alert: AlertService) {
  
  }
  obtenerDatos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(catchError(this.nameUsers));
  }
  // Función para manejar el error y devolver un array vacío
  private nameUsers(): Observable<any[]> {
    const users: User[] = [];

    namesAplication.forEach((element) => {
      const newEmail = users.push({
        id:    Math.floor(Math.random() * 9999 ),
        mail:element.name+'@'+
          namesDepartments[
            Math.floor(Math.random() * namesDepartments.length)
          ] + '.com',
        gender: element.gender,
        name: element.name,
      });


    });

    return of(users);
  }
}
