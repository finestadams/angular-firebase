import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { PortalHomeComponent } from './components/portal-home/portal-home.component';
import { AddContactsComponent } from './components/portal-home/pages/add-contacts/add-contacts.component';
import { PublishJournalComponent } from './components/portal-home/pages/publish-journal/publish-journal.component';
import { AddEventsComponent } from './components/portal-home/pages/add-events/add-events.component';
import { PostNotificationComponent } from './components/portal-home/pages/post-notification/post-notification.component';
import {Routing} from './app.routes';
import { NavbarComponent } from './components/portal-home/navbar/navbar.component';
import { LoginComponent } from './components/portal-home/login/login.component';
import {AuthService} from './providers/auth.service';
import {FirebaseService } from './services/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    PortalHomeComponent,
    AddContactsComponent,
    PublishJournalComponent,
    AddEventsComponent,
    PostNotificationComponent,
    NavbarComponent,
    LoginComponent,
 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
