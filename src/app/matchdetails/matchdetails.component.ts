import { Component, OnInit } from '@angular/core';
import { MatchdataService } from '../matchdata.service';

@Component({
  selector: 'app-matchdetails',
  templateUrl: './matchdetails.component.html',
  styleUrls: ['./matchdetails.component.css']
})
export class MatchdetailsComponent implements OnInit {
  matchdetails: any;
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  constructor(private matchdata: MatchdataService) { }

  ngOnInit() {
    this.matchdata.getJSON().subscribe(data => {
      this.matchdetails = data
      this.matchdetails.rounds.map(round => {
        round.matches.map(match => match.date = new Date(match.date))
      })
    })
  }
}
