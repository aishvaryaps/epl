import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { MatchdetailsComponent } from './matchdetails/matchdetails.component';

const routes: Routes = [
  {
    redirectTo: 'home',
    path: '',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'scoreboard',
    component: ScoreboardComponent
  },
  {
    path: 'matchdetails',
    component: MatchdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
