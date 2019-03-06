import { Injectable } from '@angular/core';
import {
Stitch,
RemoteMongoClient,
AnonymousCredential
} from 'mongodb-stitch-browser-sdk';
import { DBConnectorService } from './dbconnector.service';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeDBService {

  constructor(private dbConnector : DBConnectorService) {}

  getRandomQuestions(){
    return this.dbConnector.getDB()
      .collection('questions').aggregate([{ $sample: { size: 20 } }]).asArray()
        .then(docs => {
          console.log("[MongoDB Stitch] Connected to Stitch")
          return docs
        }).catch(err => {
          console.error(err)
          return err
      });

  }

}
