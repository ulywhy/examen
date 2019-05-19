import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, Validators, FormControl } from '@angular/forms';
import { KnowledgeDBService } from './knowledge-db.service';
import { AuthenticationService } from './authentication.service';
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
//navbar
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppComponent  implements OnDestroy {
  //navbar attributes
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  @ViewChild('stepper') stepper: MatHorizontalStepper;

  buttonName:string = 'Evaluar';
  finished:boolean = false;
  expandedQuestion:any;
  questions: any;
  userAccountFormControl : FormControl;
  headerColumns = ["questionTitle"];
  currentUser : any;
  userName: string = "";
  total:number = 0;
  allAnswered:boolean = false;
  numberOfQuestions : number = 20;


  constructor( media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
    private knowledgeDB: KnowledgeDBService,
    private authenticationService: AuthenticationService){
    //navbar
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.userAccountFormControl = new FormControl('', [
      Validators.pattern('[1-9][0-9]{6,6}'),
      Validators.required
    ]);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  getQuestions(){
    this.knowledgeDB.getRandomQuestions(this.numberOfQuestions)
    .then(data => {
      this.questions = data
      this.expandedQuestion = this.questions[0];
      console.log(this.questions)
    });
  }

  authenticate(){
    console.log(this.userAccountFormControl)
    this.currentUser = this.userAccountFormControl.value;
    console.log(this.currentUser)
    this.authenticationService.authenticate(this.currentUser).then(result =>{
      if(result.user === this.currentUser) {
        this.userName = result.name;
        console.log(result)
        if(result.questions){
          this.buttonName = "Cerrar"
          this.total = result.total;
          this.finished = true;
          this.allAnswered = true;
          this.questions = result.questions;
        }else{
          this.getQuestions();
        }
        this.stepper.next();
      }
      else{
        this.userAccountFormControl.setErrors({'incorrect': true});
      }
    })
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
      this.finished = true;
      this.buttonName = 'Finalizar'
    }
  }

  keyDownFunction(event){
    if(event.keyCode == 13 && this.userAccountFormControl) {
      this.authenticate();
    }
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }


}
