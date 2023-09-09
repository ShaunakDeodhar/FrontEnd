import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent {

  emailId = ''
  name = ''
  password = ''
  address = ''

  constructor(private http : HttpClient, private route : ActivatedRoute, private router : Router) { }
  
  getClient() {
    this.http.get('http://localhost:3000/getClient/' + this.emailId)
    .subscribe((response : any) => {
      const client = response[0]
      this.emailId = client.emailId
      this.name = client.name
      this.password = client.password
      this.address = client.address
    })
  }

  editClient() {
    const client = {
      emailId: this.emailId,
      name: this.name,
      password: this.password,
      address: this.address
    }
    this.http.put('http://localhost:3000/editClient', client)
    .subscribe((response : any) => {
      alert(response.message)
      this.router.navigate(['/viewClient'])
    }, (error) => {
      console.log('Error in updating client')
    })
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const paramEmail = params.get('emailId')
      if (paramEmail !== null) {
        this.emailId = paramEmail
        this.getClient()
      } else {
        console.log('Email cannot be blank in route')
      }
    })
  }
}
