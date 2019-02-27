import { Component } from '@angular/core';
import { KnowledgeDBService } from './knowledge-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private knowledgeDB : KnowledgeDBService){}

  title = 'expert';


  questions:any = this.knowledgeDB.getRandomQuestions();
}
