import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { PortalHomeComponent } from './components/portal-home/portal-home.component'
import { AddContactsComponent } from './components/portal-home/pages/add-contacts/add-contacts.component';
import { PublishJournalComponent } from './components/portal-home/pages/publish-journal/publish-journal.component';
import { AddEventsComponent } from './components/portal-home/pages/add-events/add-events.component';
import { PostNotificationComponent } from './components/portal-home/pages/post-notification/post-notification.component';
import { LoginComponent } from './components/portal-home/login/login.component';
const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'contacts',
        component: AddContactsComponent
    },
    {
        path: 'journals',
        component: PublishJournalComponent
    },
    {
        path: 'events',
        component: AddEventsComponent
    },
    {
        path: 'notifications',
        component: PostNotificationComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'

    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);