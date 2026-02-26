import { Routes } from '@angular/router';

import { Home } from './Pages/home/home';
import { About } from './Pages/about/about';
import { Schemes } from './Pages/schemes/schemes';
import { Development } from './Pages/development/development';
import { Gallery } from './Pages/gallery/gallery';
import { Contact } from './Pages/contact/contact';
import { Members } from './Pages/members/members';
import { Schools } from './Pages/schools/schools';
import { Services } from './Pages/services/services';
import { Notices } from './Pages/notices/notices';
import { Complaints } from './Pages/complaints/complaints';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'schemes', component: Schemes },
  { path: 'development', component: Development },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
  { path: 'members', component: Members },
  { path: 'schools', component: Schools },
  { path: 'services', component: Services },
  { path: 'notices', component: Notices },
  { path: 'complaints', component: Complaints },
  { path: '**', redirectTo: '' }
];
