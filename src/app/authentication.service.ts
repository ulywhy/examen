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
export class AuthenticationService {

  constructor(private dbConnector: DBConnectorService) {
  }

  authenticate(userAccount:number):any{


    return this.dbConnector.getDB().collection('users').find({"user":userAccount}, {"limit" : 1})
    .first()
    .then(doc => {
      console.log(doc)
      return doc
    }).catch(err => {
      console.log(err)
      return null
    });
  }
}
