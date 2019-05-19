import { Injectable } from '@angular/core';
import {
Stitch,
RemoteMongoClient,
AnonymousCredential
} from 'mongodb-stitch-browser-sdk';

@Injectable({
  providedIn: 'root'
})
export class DBConnectorService {

  client;
  db;

  constructor() {
    this.client = Stitch.initializeDefaultAppClient('expert-uwmrs');
    this.db = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('knowledgeDB');
    this.client.auth.loginWithCredential(new AnonymousCredential()).then(user =>{
      console.log(user)
    })
  }

  getDB(){
    return this.db;
  }

  getClient(){
    return this.client;
  }
}
