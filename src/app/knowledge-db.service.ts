import { Injectable } from '@angular/core';
import {
Stitch,
RemoteMongoClient,
AnonymousCredential
} from 'mongodb-stitch-browser-sdk';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeDBService {

  client;
  db;

  constructor() {
    this.client = Stitch.initializeDefaultAppClient('expert-uwmrs');

    this.db = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('knowledgeDB');
  }

  getRandomQuestions(){
    return this.client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
      this.db.collection('questions').aggregate([{ $sample: { size: 20 } }]).asArray()
    ).then(docs => {
        console.log("[MongoDB Stitch] Connected to Stitch")
        return docs
    }).catch(err => {
        console.error(err)
        return err
    });

  }

}
