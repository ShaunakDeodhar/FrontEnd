import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent {
  clients: any[] = []
  noClients = true

  constructor(private http : HttpClient) { }

  getClients() {
    this.http.get('http://localhost:3000/getClients')
    .subscribe((response : any) => {
      this.clients = response
      if (this.clients.length === 0) {
        this.noClients = false
      } else {
        this.noClients = true
      }
    }, (error) => {
      console.log('Error in getting clients from db')
    })
  }

  ngOnInit() {
    this.getClients()
  }

  deleteClient(emailId: string) {
    this.http.delete('http://localhost:3000/deleteClient/' + emailId)
    .subscribe((response : any) => {
      alert(response.message)
      this.getClients()
    }, (error) => {
      console.log('Error in deleting client from db')
      alert('Error in deleting client from db')
    })
  }
}
