
import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise'
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
}
login(email, password): Observable <any> {
  return FirebaseListObservable.fromPromise(
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
  )
}
logout(){
  this.afAuth.auth.signOut();
}
isAuthenticated(): Observable<boolean>{
  return this.user.map( user => user && user.uid !== undefined);
}
}
