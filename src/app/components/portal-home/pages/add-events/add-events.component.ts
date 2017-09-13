import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../../../services/firebase.service'
import { Contact } from '../../../../contact';
import { Events } from '../../../../events';
@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css'],
  providers: [FirebaseService]
})
export class AddEventsComponent implements OnInit {
  contacts: Contact[] = [];
  events: Events[] = [];

  constructor(private firebase: FirebaseService) {

  }

  ngOnInit() {
    this.firebase.getEvent().subscribe(event => {
      this.events = event;
      console.log(this.events);
    });
    this.firebase.getEvent();
  }
  addEvent(title: string, mytime: string, mydate: string, description: string) {
    var newEvent = {
      title: title,
      time: mytime,
      date: mydate,
      description: description,
    }
    //console.log(newEvent);
    this.firebase.addEvent(newEvent);
  }
  delete(key) {
    this.firebase.delete(key);
  }
}

