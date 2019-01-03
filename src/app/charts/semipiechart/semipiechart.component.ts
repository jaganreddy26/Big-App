import {Component, ElementRef, ViewChild,OnInit} from '@angular/core'
import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-semipiechart',
  templateUrl: './semipiechart.component.html',
  styleUrls: ['./semipiechart.component.scss']
})
export class SemiPiechartComponent implements OnInit {

  chart = new Chart({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      height: 220
  },
  colors: ['#e79989','#f0f0f0'],
  title: {
      text: '587',
      align: 'center',
      verticalAlign: 'middle',
      y: 40
  },
  subtitle: {
    verticalAlign: 'middle',
    floating: true,
    text: 'Daily Average',
    y: 50
},
  credits: {
    enabled: false
},
  plotOptions: {
      pie: {
          dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                  fontWeight: 'bold',
                  color: 'white'
              }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '110%'
      }
  },
  series: [{
      type: 'pie',
      innerSize: '50%',
      data: [
          ['New Users Growth',500],
          ['Conversation rate',200]
      ]
  }]
  })


  constructor() {
  }
ngOnInit(){

}

}
