import { Component, OnInit } from '@angular/core';
import { MatchdataService } from '../matchdata.service';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';

@Component({
  selector: 'app-matchdetails',
  templateUrl: './matchdetails.component.html',
  styleUrls: ['./matchdetails.component.css']
})
export class MatchdetailsComponent implements OnInit {
  matchdetails: any = [];
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  currentMatchday = '';
  currenMatchdayName = '';

  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    satHighlight: true
  };

  filterDate: any;

  allTeams: string[];

  constructor(private matchdata: MatchdataService) { }

  ngOnInit() {
    this.matchdata.getJSON().subscribe(data => {
      this.matchdetails = data
      // this.currentMatchday = this.matchdetails.rounds[0];
      this.currenMatchdayName = this.matchdetails.rounds[0].name
      this.setMatchDayDetails(this.currenMatchdayName)
      this.matchdetails.rounds.map(round => {
        round.matches.map(match => match.date = new Date(match.date))
      })
      this.getTeams()
    })
  }

  setMatchDayDetails = (matchday) => {
    this.currentMatchday = this.matchdetails.rounds.find(elem => elem.name === matchday)
  }

  getTeams = () => {
    this.allTeams = ([].concat.apply([], this.matchdetails.rounds.map(round => round.matches.reduce((x, y) => x.findIndex(e => e.team1.key == y.team1.key) < 0 ? [...x, y] : x, []))).map(match => match.team1.name).filter(this.distinct))
  }

  distinct = (value, index, self) => {
    return self.indexOf(value) === index
  }
}
