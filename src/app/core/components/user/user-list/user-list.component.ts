import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../../interfaces/user';
import { UserService } from '../../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { imagesUsers } from '../../../services/data/user-data';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { AlertService } from '../../../services/alert.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  private destroy$ = new Subject<void>();
  public searchTerm!: string;
  users: User[] = [];
  usersFilter: User[] = [];




  userService = inject(UserService);
  notification = inject(AlertService);

  ngOnInit(): void {
    this.loadUsers();
  }
  public filterDynamic(searchTerm: any) {
    this.searchTerm = searchTerm;
    this.usersFilter = this.users?.filter(
      (user) =>
        user.name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
        user.mail.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
  }
  clean() {
    this.users=[];
    this.usersFilter=[];
    this.notification.success('Periferia','Usuarios eliminados')
  }
  imageUser(gender: string) {
    var url: string;
    if (gender == 'm') {
      url = imagesUsers[Math.round(Math.random())].url;
    } else {
      url = imagesUsers[Math.floor(Math.random() * 2) + 2].url;
    }

    return url;
  }
  add() {
   
    this.loadUsers();
    this.notification.success('Periferia','Usuarios añadidos')
  }
  loadUsers() {
    this.userService.obtenerDatos().pipe(takeUntil(this.destroy$)).subscribe((resp) => {
      this.users = [...this.users, ...resp];
      this.usersFilter = this.users;
      this.setImageUsers();
   
    });
  }
  setImageUsers() {
    this.users.forEach((user) => {
      user.image = this.imageUser(user.gender);
    });
  }

    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
}
