import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent {
  emailId = ''
  name = ''
  password = ''
  confirmedPassword = ''
  address = ''

  constructor(private http : HttpClient) { }

  createClient() {
    const client = {
      emailId: this.emailId,
      name: this.name,
      password: this.password,
      address: this.address
    }

    this.http.post('http://localhost:3000/createClient', client)
    .subscribe((response:any) => {
      alert(response.message)
      this.emailId = '';
      this.name = '';
      this.password = '';
      this.address = '';
    }, (error) => {
      console.error('Error in TS for creating client', error)
      alert('Error in TS for creating client')
    })
  }
}
