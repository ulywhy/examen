import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeDBService } from '.././knowledge-db.service';
import { AuthenticationService } from '.././authentication.service';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { MatHorizontalStepper, MatStep } from '@angular/material';
import { MatRadioChange } from '@angular/material';
import { Observable, of } from 'rxjs';
import {
Stitch,
RemoteMongoClient,
AnonymousCredential
} from 'mongodb-stitch-browser-sdk';
import {TooltipPosition} from '@angular/material';
import { delay } from 'rxjs/operators';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TestComponent {

  @Input() currentUser : any;
  @Input() questions: any;

  numberOfQuestions : number = 20;
  buttonName:string = 'Evaluar';
  finished:boolean = false;
  expandedQuestion:any;
  headerColumns = ["questionTitle"];
  total:number = 0;
  allAnswered:boolean = false;


  constructor(private knowledgeDB : KnowledgeDBService,
              private authenticationService : AuthenticationService,
              private router: Router)
  {
    this.questions = null;
  }

  ngOnInit() {
  }


  getQuestions(){
    this.knowledgeDB.getRandomQuestions(this.numberOfQuestions)
    .then(data => {
      this.questions = data
      this.expandedQuestion = this.questions[0];
    });
  }

  
  evaluate(question : any, answerIndex:number, questionIndex:number){
    question.selected = answerIndex;
    question.correct = question.answers[answerIndex].correct;
    this.allAnswered = this.questions.find(question => question.selected === undefined) === undefined;
    this.delay(200).then(any => {
      this.nextQuestion(question, questionIndex)
    });
  }


  nextQuestion(question:any, index:number){
    this.expandedQuestion = this.expandedQuestion === question ? this.questions.find(question => question.selected === undefined) : question;
  }

  expandWho(question:any){
    return this.finished ? 'expanded' : question == this.expandedQuestion ? 'expanded' : 'collapsed'
  }

  finish(){
    if(this.finished){
      this.knowledgeDB.saveResult(this.currentUser, this.questions, this.total)
      .then(doc => {
        window.location.reload();
      }).catch(err => {
        console.error(err)
        return err
      })
    }else{
      this.questions.forEach(question => this.total += question.correct ? 1 : 0)
      window.scroll(0,0);
    }
    this.finished = true;
    this.buttonName = 'Finalizar'
  }
  keyDownFunction(event){
    if(event.keyCode == 13) {
      this.authenticate();
    }
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

}
