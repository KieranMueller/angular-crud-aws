import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit, OnDestroy {
  subscription: any;
  users: any;
  showModal = false;
  user: any;

  constructor(private http: HttpClient, private service: MyServiceService) {}

  ngOnDestroy(): void {}

  ngOnInit() {
    this.subscription = this.service.data$.subscribe(() => {
      this.getUsers();
    });
    this.getUsers();
  }

  getUsers() {
    this.http.get(`http://localhost:8080/people`).subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (e) => console.log(e),
    });
  }

  deleteUser(id: number) {
    this.http.delete(`http://localhost:8080/people/${id}`).subscribe({
      error: (e) => console.log(e),
      complete: () => this.getUsers(),
    });
  }

  editUser(id: number) {
    for (let user of this.users) if (user.id === id) this.user = user;
    this.showModal = true;
  }

  toggleModal() {
    this.showModal = false;
  }
}
