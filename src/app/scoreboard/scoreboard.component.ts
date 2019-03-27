import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  constructor() { }

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
  }

}
