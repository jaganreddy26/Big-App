import { Component, ElementRef, ViewChild, OnInit } from '@angular/core'
import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'pie',
      renderTo: 'container',
      height: 220
    },


    colors: ['#8be3e4', '#d085e0', '#e79989', '#f0f0f0'],
    credits: {
      enabled: false
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: '9,020'
    },
    subtitle: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Total Average',
      y: 30
    },
    plotOptions: {
      pie: {
        innerSize: '90%'
      }
    },

    series: [{
      data: [
        ['Desktop', 4000],
        ['Tablets', 3500],
        ['Mobiles', 2520],
      ]
    }]
  })

  constructor() {

  }
  ngOnInit() {

  }

}
