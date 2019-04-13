import { Component, OnInit } from '@angular/core';
import { MatchdataService } from '../matchdata.service';
import { RoundFilterPipe } from '../round-filter.pipe';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  private matchdetails: any = [];
  private allTeams: string[];
  teamReport: {won:number}[] = [];
  searchTeam: string = "";

  constructor(private matchdata: MatchdataService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: 'white'
        },
      }],
      xAxes: [{
        ticks: {
          fontColor: 'white'
        }
      }]
    },

  };
  public barChartLabels = ['Scored', 'Against'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [12, 8] }
  ];

  public pieChartColor = [{ backgroundColor: ["#86c7f3", "#ffe199", '#ffffff'] }];
  public barChartColor = [{ backgroundColor: ["#86c7f3", "#ffe199", '#ffffff'] }];


  public pieChartOptions: any = {
    legend: {
      display: false
    }
  }
  public pieChartLabels = ['Won', 'Lost', 'Drawn'];
  public pieChartData = [10, 3, 1];
  public pieChartType = 'pie';

  ngOnInit() {
    this.getMatchDetails()
  }

  getMatchDetails = () => {
    this.matchdata.getJSON().subscribe(data => {
      this.matchdetails = data

      this.getTeams()
    })
  }

  getTeams = () => {
    this.allTeams = ([].concat.apply([], this.matchdetails.rounds.map(round => round.matches.reduce((x, y) => x.findIndex(e => e.team1.key == y.team1.key) < 0 ? [...x, y] : x, []))).map(match => match.team1.name).filter((value, index, self) => {
      return self.indexOf(value) === index
    }))
    this.generateTeamReport()
  }

  generateTeamReport = () => {
    // let teamReport = []
    this.allTeams.map(team => {
      let teamObject = {
        name: team,
        matchesPlayed: 0,
        won: 0,
        lost: 0,
        drawn: 0,
        scored: 0,
        against: 0,
        barChartData: [],
        pieChartData: [],
        winRate: "",
        scoreRate: ""
      }
      // teamReport.push(teamObject)
      this.matchdetails.rounds.map(
        round => {
          round.matches.map(match => {
            if (match.team1.name === team) {
              teamObject.matchesPlayed += 1
              if (match.score1 > match.score2) {
                teamObject.won += 1
              }
              else if (match.score2 > match.score1) {
                teamObject.lost += 1
              }
              else {
                teamObject.drawn += 1
              }
              teamObject.scored += match.score1
              teamObject.against += match.score2
            }
            else if (match.team2.name === team) {
              teamObject.matchesPlayed += 1
              if (match.score2 > match.score1) {
                teamObject.won += 1
              }
              else if (match.score1 > match.score2) {
                teamObject.lost += 1
              }
              else {
                teamObject.drawn += 1
              }
              teamObject.scored += match.score2
              teamObject.against += match.score1
            }
          })
        }
      )
      teamObject.barChartData.push({ data: [teamObject.scored, teamObject.against] })
      teamObject.pieChartData[0] = teamObject.won
      teamObject.pieChartData[1] = teamObject.lost
      teamObject.pieChartData[2] = teamObject.drawn
      teamObject.winRate = (teamObject.won / teamObject.lost).toFixed(2)
      teamObject.scoreRate = (teamObject.scored / teamObject.against).toFixed(2)
      this.teamReport.push(teamObject)
    })
    
    this.teamReport.sort((a,b) => b.won - a.won)
  }
}
