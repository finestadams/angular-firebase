import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import {Contact} from '../contact'
import {Events} from '../events'
@Injectable()
export class FirebaseService {
  contacts: FirebaseListObservable<Contact[]>;
  events: FirebaseListObservable<Events[]>;
  reminder: FirebaseListObservable<any[]>;
  journal: FirebaseListObservable<any[]>;
  
  constructor(private _af: AngularFireDatabase) { }
  getContacts(){
    this.contacts = this._af.list('/contacts') as
    FirebaseListObservable<any[]>
    console.log(this.contacts);
    return this.contacts;
  }
  getEvent(){
    this.events = this._af.list('/events') as
    FirebaseListObservable<Events[]>
    return this.events;
  }
  getReminder(){
    this.reminder = this._af.list('/reminder') as
    FirebaseListObservable<any[]>
    return this.reminder;
  }
  getJournal(){
    this.journal = this._af.list('/journal') as
    FirebaseListObservable<any[]>
    return this.journal;
  }
  addEvent(newEvent){
    // console.log(this.events);
    return this.events.push(newEvent);
  }
  addReminder(newNotification){
    return this.reminder.push(newNotification);
  }
  addJournal(newJournal) {
    return this.journal.push(newJournal);
  }
  delete(key){
    return this.events.remove(key);
}
deleteNotificaton(key){
  return this.reminder.remove(key);
}
deleteJournal(key){
  return this.journal.remove(key)
}
}
