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
  }

  getDB(){
    return this.db;
  }
}
