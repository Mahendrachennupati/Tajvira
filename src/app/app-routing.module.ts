import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from 'src/SharedPages/page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { CostestimatorComponent } from './costestimator/costestimator.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:"about-us",component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'get-in-touch',component:GetintouchComponent},
  {path:'calculator',component:CostestimatorComponent},
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false, // Set to true for debugging
    useHash: false,       // Remove # from URLs
    scrollPositionRestoration: 'top', // Scroll to top on route change
    anchorScrolling: 'enabled',       // Enable anchor scrolling
    errorHandler: (error: any) => {   // Global error handler
      console.error('Router error:', error);
    }
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
