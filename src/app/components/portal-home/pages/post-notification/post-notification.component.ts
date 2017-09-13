import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../../../services/firebase.service'

@Component({
  selector: 'app-post-notification',
  templateUrl: './post-notification.component.html',
  styleUrls: ['./post-notification.component.css']
})
export class PostNotificationComponent implements OnInit {
  reminder: Array<any[]> = [];
  constructor(private _firebase: FirebaseService) { }

  ngOnInit() {
    this._firebase.getReminder()
    .subscribe(reminder => {
      this.reminder = reminder,
      console.log(this.reminder);
    })

    this._firebase.getReminder();
  }
  addNotification(title: string, description: string){
     var newNotification = {
       title: title,
       description: description
     }
    //  console.log(newNotification);
      this._firebase.addReminder(newNotification);
  }
  delete(key){
    this._firebase.deleteNotificaton(key);
  }
}
