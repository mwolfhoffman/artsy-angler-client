//  Libs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router'

//  Routes
import { appRoutes } from '../routes'

//  Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { StoreComponent } from './store/store.component';
import { PageNotFoundComponent } from './error/404/404.component';
import { EventComponent } from './events/event.component';
import { EventsComponent } from './events/events.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StoreComponent,
    PageNotFoundComponent,
    EventComponent,
    EventsComponent,
    BlogComponent,
    PostComponent,
    CartComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,
        { enableTracing: false }) // <-- debugging purposes only)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
