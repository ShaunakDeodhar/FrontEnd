import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent {
  clients: any[] = []

  constructor(private http : HttpClient) { }

  getClients() {
    this.http.get('http://localhost:3000/getClients')
    .subscribe((response : any) => {
      this.clients = response
    }, (error) => {
      console.log('Error in getting clients from db')
    })
  }

  ngOnInit() {
    this.getClients()
  }
}
