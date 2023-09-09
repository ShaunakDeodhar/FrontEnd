import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-meetings',
  templateUrl: './view-meetings.component.html',
  styleUrls: ['./view-meetings.component.css']
})
export class ViewMeetingsComponent {
  meetings: any[] = []
  noMeetings = true

  constructor(private http : HttpClient) { }

  getMeetings() {
    this.http.get('http://localhost:3000/getMeetings')
    .subscribe((response : any) => {
        this.meetings = response
        for (let i = 0; i < this.meetings.length; i++) {
          this.meetings[i].startTime = this.meetings[i].startDate.substring(0, 10) + 'T' + this.meetings[i].startTime
          this.meetings[i].endTime = this.meetings[i].endDate.substring(0, 10) + 'T' + this.meetings[i].endTime
        }
        if (this.meetings.length === 0) {
          this.noMeetings = false
        } else {
          this.noMeetings = true
        }
    }, (error) => {
      console.log('Error in getting clients from db')
    })
  }

  ngOnInit() {
    this.getMeetings()
  }

  deleteMeeting(meetingId: string) {
    this.http.delete('http://localhost:3000/deleteMeeting/' + meetingId)
    .subscribe((response : any) => {
      alert(response.message)
      this.getMeetings()
    }, (error) => {
      console.log('Error in deleting meeting from db')
      alert('Error in deleting meeting from db')
    })
  }
}
