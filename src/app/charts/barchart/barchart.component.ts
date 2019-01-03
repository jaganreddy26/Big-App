import { Component, OnInit } from '@angular/core';
import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'column',
      height: 220
  },
  credits: {
    enabled: false
},
title: {
  text: ''
},
colors: ['#8be3e4'],
  xAxis: {
      type: 'category'
  },
  legend: {
      enabled: false
  },

    series: [
      {
        name: "Demographics",
        data: [
          {
            name: "18-24",
            y: 18,
            drilldown: "18-24"
          },
          {
            name: "25-34",
            y: 11,
            drilldown: "25-34"
          },
          {
            name: "25-45",
            y: 17.23,
            drilldown: "25-45"
          },
          {
            name: "45-65",
            y: 15.58,
            drilldown: "45-65"
          },
          {
            name: "65+",
            y: 19.02,
            drilldown: "65+"
          }
        ]
      }
    ]
  });
  constructor() {

   }

  ngOnInit() {
  }

}
