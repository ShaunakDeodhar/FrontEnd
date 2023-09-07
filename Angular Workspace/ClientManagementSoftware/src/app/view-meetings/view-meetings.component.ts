import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-meetings',
  templateUrl: './view-meetings.component.html',
  styleUrls: ['./view-meetings.component.css']
})
export class ViewMeetingsComponent {
  meetings: any[] = []

  constructor(private http : HttpClient) { }

  getMeetings() {
    this.http.get('http://localhost:3000/getMeetings')
    .subscribe((response : any) => {
      this.meetings = response
    }, (error) => {
      console.log('Error in getting clients from db')
    })
  }

  ngOnInit() {
    this.getMeetings()
  }
}
