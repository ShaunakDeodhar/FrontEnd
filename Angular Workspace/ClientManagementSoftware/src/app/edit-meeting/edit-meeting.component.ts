import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css']
})
export class EditMeetingComponent {
  meetingTopic = ''
  meetingId = ''
  numberOfPeople = ''
  startDate = ''
  startTime = ''
  endDate = ''
  endTime = ''

  constructor(private http : HttpClient, private route : ActivatedRoute, private router : Router) { }
  
  getMeeting() {
    this.http.get('http://localhost:3000/getMeeting/' + this.meetingId)
    .subscribe((response : any) => {
      const meeting = response[0]
      this.meetingTopic = meeting.meetingTopic
      this.meetingId = meeting.meetingId
      this.numberOfPeople = meeting.numberOfPeople
      
      this.startDate = meeting.startDate
      this.startTime = meeting.startTime
      this.endDate = meeting.endDate
      this.endTime = meeting.endTime
    })
  }

  formatDate(fullDate: string) {
    let dbFullDate = new Date(fullDate)
    let dbYear = dbFullDate.getFullYear()
    let dbMonth = dbFullDate.getMonth() + 1
    let dbDate = dbFullDate.getDate()
    return dbDate + '/' + dbMonth + '/' + dbYear
  }

  editMeeting() {
    const meeting = {
      meetingTopic: this.meetingTopic,
      meetingId: this.meetingId,
      numberOfPeople: this.numberOfPeople,
      startDate: this.startDate,
      startTime: this.startTime,
      endDate: this.endDate,
      endTime: this.endTime
    }
    this.http.put('http://localhost:3000/editMeeting', meeting)
    .subscribe((response : any) => {
      alert(response.message)
      this.router.navigate(['/viewMeeting'])
    }, (error) => {
      console.log('Error in updating meeting')
    })
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const paramID = params.get('meetingId')
      if (paramID !== null) {
        this.meetingId = paramID
        this.getMeeting()
      } else {
        console.log('Meeting ID cannot be blank in route')
      }
    })
  }
}
