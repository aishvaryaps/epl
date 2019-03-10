import { Component, OnInit } from '@angular/core';
import { MatchdataService } from '../matchdata.service';

@Component({
  selector: 'app-matchdetails',
  templateUrl: './matchdetails.component.html',
  styleUrls: ['./matchdetails.component.css']
})
export class MatchdetailsComponent implements OnInit {
  matchdetails: any;
  constructor(private matchdata: MatchdataService) { }

  ngOnInit() {
    this.matchdata.getJSON().subscribe(data => {
      this.matchdetails = data
        //console.log(this.matchdetails);
    })
  }
}
