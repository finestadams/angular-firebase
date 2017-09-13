import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../../../services/firebase.service'

@Component({
  selector: 'app-publish-journal',
  templateUrl: './publish-journal.component.html',
  styleUrls: ['./publish-journal.component.css']
})
export class PublishJournalComponent implements OnInit {


  constructor(private firebase: FirebaseService) { }
  journals: Array<any[]> = [];
  ngOnInit() {
    this.firebase.getJournal().subscribe( journal => {
      this.journals = journal;
      console.log(this.journals);
    });
    this.firebase.getJournal();
  }
  addJournal(jtitle: string,jauthor:string, jurl: string, jabstract: string){
    var newJournal = {
      title: jtitle,
      author:jauthor,
      url: jurl,
      abstract: jabstract
    }
    this.firebase.addJournal(newJournal);
  }
  deleteJournal(key){
    this.firebase.deleteJournal(key);
  }
}
