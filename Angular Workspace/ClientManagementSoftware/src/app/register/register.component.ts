import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailId = ''
  password = ''
  firstName = ''
  lastName = ''

  constructor(private http : HttpClient) { }

  addUser() {
    const user = {
      emailId: this.emailId,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    }

    if(user.emailId !== '') {
      this.http.post('http://localhost:3000/addUser', user)
      .subscribe((response:any) => {
        alert(response.message)
        this.emailId = '';
        this.password = '';
        this.firstName = '';
        this.lastName = '';
      }, (error) => {
        console.error('Error in TS for adding user', error)
        alert('Error in TS for adding user')
      })
    } else {
      alert('Email cannot be blank')
    }
  }
}
