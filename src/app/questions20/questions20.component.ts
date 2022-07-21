import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/service/question.service';


@Component({
  selector: 'app-questions20',
  templateUrl: './questions20.component.html',
  styleUrls: ['./questions20.component.css']
})
export class Questions20Component implements OnInit {

  public questionCount: number = 1;
  public questionList: any = [];
  public answerList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  public timeLeft: number = 45;
  public currentIndex: number = (Math.floor(Math.random() * 172)) + 289;
  interval$: any;
  public progress: string = "0";
  public incorrectAnswers: number = 0;
  public quizCompleted: boolean = false;
  finalScore: number = 0;
  finalIncorrect: number = 0;



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
          let rand = (Math.floor(Math.random() * 172)) + 289;
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
      this.timeLeft = 45;
      this.progress = String(Number(this.progress) + 5);
    } else {
      this.finalIncorrect = this.incorrectAnswers;
      this.finalScore = this.points;
      this.quizCompleted = true;
    }
  }

  previousQuestion() {
    this.currentIndex--;
    this.getAnswers();
    this.questionCount--;
    this.timeLeft = 45;
    this.progress = String(Number(this.progress) - 5);
  }

  checkAnswer(ind: number, ans: any) {
    if (ans == this.questionList[ind].answer) {
      this.points += 20;
      setTimeout(() => {
        this.nextQuestion();
      }, 750);
    } else {
      this.points -= 10;
      this.incorrectAnswers++;
    }
  }

  startCounter() {
    this.interval$ = interval(1000).subscribe(val => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        this.nextQuestion();
        this.points -= 10;
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
    this.timeLeft = 45;
    this.startCounter();
  }
}
