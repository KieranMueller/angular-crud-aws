import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  user: any = {
    firstName: '',
    lastName: '',
    username: '',
    age: undefined,
  };

  constructor(private http: HttpClient, private service: MyServiceService) {}

  ngOnInit() {}

  addUser() {
    this.http.post(`http://localhost:8080/people`, this.user).subscribe({
      error: (e) => console.log(e),
      complete: () => {
        this.resetFields();
        this.service.updateData();
      },
    });
  }

  resetFields() {
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.username = '';
    this.user.age = undefined;
  }
}
