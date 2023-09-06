import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.css']
})
export class ScheduleMeetingComponent {
  meetingTopic = ''
  meetingId = ''
  numberOfPeople = ''
  startDate = ''
  startTime = ''
  endDate = ''
  endTime = ''

  constructor(private http : HttpClient) { }

  scheduleMeeting() {
    const meeting = {
      meetingTopic: this.meetingTopic,
      meetingId: this.meetingId,
      numberOfPeople: this.numberOfPeople,
      startDate: this.startDate,
      startTime: this.startTime,
      endDate: this.endDate,
      endTime: this.endTime
    }

    this.http.post('http://localhost:3000/scheduleMeeting', meeting)
    .subscribe((response:any) => {
      alert(response.message)
      this.meetingTopic = '';
      this.meetingId = '';
      this.numberOfPeople = '';
      this.startDate = '';
      this.startTime = '';
      this.endDate = '';
      this.endTime = '';
    }, (error) => {
      console.error('Error in TS for scheduling meeting', error)
    })
  }
}
