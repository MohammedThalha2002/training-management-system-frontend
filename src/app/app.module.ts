import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './courses/card/card.component';
import { CoursesComponent } from './courses/courses.component';
import { FeaturedComponent } from './featured/featured.component';
import { RoadmapsComponent } from './roadmaps/roadmaps.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AdminComponent } from './auth/admin/admin.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    CoursesComponent,
    FeaturedComponent,
    RoadmapsComponent,
    AuthComponent,
    LoginComponent,
    SigninComponent,
    AdminComponent,
    AdminPanelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
