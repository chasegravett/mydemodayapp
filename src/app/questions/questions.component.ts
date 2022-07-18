import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/service/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public questionCount: number = 1;
  public questionList: any = [];
  public answerList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  public timeLeft: number = 30;
  public currentIndex: number = Math.floor(Math.random() * 268);
  interval$: any;
  public progress: string = "0";



  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res;
      })
    this.getAnswers();
  }

  getAnswers() {
    this.answerList = [];
    this.questionService.getQuestionJson()
      .subscribe(res => {
        for (let i = 0; i <= 3; i++) {
          let rand = Math.floor(Math.random() * 268);
          this.answerList.push(res[rand].answer);
        }
        let rem = Math.floor(Math.random() * 4);
        this.answerList.splice(rem, 1, res[this.currentIndex].answer);
      })
  }

  nextQuestion() {
    if (this.questionCount !== 20) {
      this.currentIndex++;
      this.getAnswers();
      this.questionCount++;
      this.timeLeft = 30;
      this.progress = String(Number(this.progress) + 5);
    }
  }

  previousQuestion() {
    this.currentIndex--;
    this.getAnswers();
    this.questionCount--;
    this.timeLeft = 30;
    this.progress = String(Number(this.progress) - 5);
  }

  checkAnswer(ind: number, ans: any) {
    if (ans == this.questionList[ind].answer) {
      this.points += 10;
      this.nextQuestion();
    } else {
      this.points -= 5;
    }
  }

  startCounter() {
    this.interval$ = interval(1000).subscribe(val => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        this.nextQuestion();
        this.points -= 5;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 650000);
  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.timeLeft = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.timeLeft = 30;
    this.startCounter();
  }
}
