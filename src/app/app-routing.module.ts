import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ExploreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
