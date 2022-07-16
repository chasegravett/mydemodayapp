import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/service/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public questionList: any = [];
  public currentQuestion: number = 0;
  public currentIndex: number = Math.floor(Math.random() * 556);
  public points: number = 0;
  public timeLeft: number = 30;


  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }
  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res;
      })
  }

  nextQuestion() {
    this.currentIndex++;
  }

  previousQuestion() {
    this.currentIndex--;
  }

}
