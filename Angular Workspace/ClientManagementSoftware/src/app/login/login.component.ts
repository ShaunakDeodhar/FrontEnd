import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailId = ''
  password = ''

  constructor(private http : HttpClient, private router : Router) { }
  
  login() {
    if (this.emailId !== '') {
      this.http.get('http://localhost:3000/getUser/' + this.emailId)
      .subscribe((response : any) => {
        if (response.length > 0 && this.password === response[0].password) {
          this.router.navigate(['/viewClient'])
        } else {
          alert('Invalid login credentials')
        }
      })
    } else {
      alert('Invalid login credentials')
    }
  }
}
