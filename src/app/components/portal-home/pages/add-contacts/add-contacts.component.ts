import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './../../../../services/firebase.service'
import {Contact}  from './../../../../contact'

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css'],
  providers: [FirebaseService],
})
export class AddContactsComponent implements OnInit {
  contact: any[];
  constructor(private _fireBaseService: FirebaseService) {
    
   }

  ngOnInit() {
    this._fireBaseService.getContacts().subscribe(contact => {
      this.contact = contact;
      console.log(this.contact);
    });
  }

}
