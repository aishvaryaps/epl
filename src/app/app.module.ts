import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MatchdetailsComponent } from './matchdetails/matchdetails.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { ChartsModule } from 'ng2-charts';

import { MatchByDatePipe } from './match-by-date.pipe';
import { RoundFilterPipe } from './round-filter.pipe';
import { TeamFilterPipe } from './team-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MatchdetailsComponent,
    ScoreboardComponent,
    MatchByDatePipe,
    RoundFilterPipe,
    TeamFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgxMyDatePickerModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
