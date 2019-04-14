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
  checkedTeam: string[] = [];

  constructor(private matchdata: MatchdataService) { }

  ngOnInit() {
    this.matchdata.getJSON_15_16().subscribe(data => {
      this.matchdetails = data
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

    this.matchdetails.rounds.unshift({
      "name": "All"
    })

    this.currenMatchdayName = this.matchdetails.rounds[0].name
  }

  distinct = (value, index, self) => {
    return self.indexOf(value) === index
  }

  updateCheckedTeam = (checked, team) => {
    if (checked) {
      this.checkedTeam.push(team)
    }
    else {
      let i = this.checkedTeam.indexOf(team);
      if (i != -1) {
        this.checkedTeam.splice(i, 1)
      }
    }
    console.log(this.checkedTeam)
  }
}
