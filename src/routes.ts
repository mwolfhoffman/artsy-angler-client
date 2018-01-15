import { RouterModule, Routes } from '@angular/router'
import { StoreComponent } from './app/store/store.component';
import { PageNotFoundComponent } from './app/error/404/404.component';
import { BlogComponent } from './app/blog/blog.component';
import { EventsComponent } from './app/events/events.component';
import { ContactComponent } from './app/contact/contact.component';
import { AboutComponent } from './app/about/about.component';


export const appRoutes: Routes = [
  { path: '', component: StoreComponent },
  // { path: 'product/:id', component: StoreComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  // { path: 'post/:id', component: PostComponent },
  { path: 'events', component: EventsComponent },
  // { path: 'event/:id', component: EventComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'cart', component: StoreComponent },
  { path: '**', component: PageNotFoundComponent }
]