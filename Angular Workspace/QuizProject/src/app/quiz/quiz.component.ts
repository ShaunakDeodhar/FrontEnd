import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions: any[] = []
  currentQuestionIndex = 0
  score = 0
  isQuizFinished = false
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/questions.json').subscribe(data=>{
        this.questions=data.questions;
    })
  }

  checkAnswer(selectedAnswer:string) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if(selectedAnswer === currentQuestion.answer){
      this.score++;
    }
    if(this.currentQuestionIndex===this.questions.length-1){
      this.isQuizFinished=true
    } else{
      this.currentQuestionIndex++;
    }
  }
}
