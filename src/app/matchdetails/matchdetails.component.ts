import { Component, OnInit } from '@angular/core';
import { MatchdataService } from '../matchdata.service';

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
    })
  }

  setMatchDayDetails = (matchday) => {
    this.currentMatchday = this.matchdetails.rounds.find(elem => elem.name === matchday)
  }
}
