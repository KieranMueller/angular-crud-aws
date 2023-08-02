import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-update-user-overlay',
  templateUrl: './update-user-overlay.component.html',
  styleUrls: ['./update-user-overlay.component.css'],
})
export class UpdateUserOverlayComponent implements OnInit {
  @Input() user = {
    id: NaN,
    firstName: '',
    lastName: '',
    username: '',
    age: undefined,
  };

  newUser = {
    id: NaN,
    firstName: '',
    lastName: '',
    username: '',
    age: undefined,
  };

  @Output() modalEmitter = new EventEmitter<any>();

  constructor(private http: HttpClient, private service: MyServiceService) {}

  ngOnInit() {}

  updateUser() {
    if (this.newUser.firstName === '')
      this.newUser.firstName = this.user.firstName;
    if (this.newUser.lastName === '')
      this.newUser.lastName = this.user.lastName;
    if (this.newUser.username === '')
      this.newUser.username = this.user.username;
    if (this.newUser.age === undefined) this.newUser.age = this.user.age;
    this.http
      .put(`http://localhost:8080/people/${this.user.id}`, this.newUser)
      .subscribe({
        error: (e) => console.log(e),
        complete: () => {
          this.service.updateData();
          this.emitClose();
        },
      });
  }

  emitClose() {
    this.modalEmitter.emit();
  }
}
