import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from 'src/SharedPages/nav-header/nav-header.component';
import { GlobalNeedsModule } from 'src/global-needs/global-needs.module';
import { NavFooterComponent } from 'src/SharedPages/nav-footer/nav-footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { CostestimatorComponent } from './costestimator/costestimator.component';
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    NavFooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    GetintouchComponent,
    CostestimatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GlobalNeedsModule,
    InputTextModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
