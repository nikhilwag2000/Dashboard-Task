import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import { NgxGaugeModule } from 'ngx-gauge';
@Component({
  selector: 'app-top-area',
  imports: [ChartModule, NgxGaugeModule],
  templateUrl: './top-area.component.html',
  styleUrl: './top-area.component.scss'
})
  
export class TopAreaComponent {
  chart: Chart;

  constructor() {
    this.chart = new Chart({
      chart: {
        type: 'column',
        backgroundColor: '#fdfcfe'
      },
      title: { text: '' },
      xAxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        crosshair: true,
        title: {
          text: 'Month'
        }
      },
      yAxis: {
        min: 0,
        max: 100,
        title: {
          text: 'Security rating'
        }
      },
      legend: { enabled: false },
      plotOptions: {
        column: {
          stacking: 'normal',
          borderRadius: 4,
          pointPadding: 0.1,
          groupPadding: 0
        }
      },
      series: [
        {
          name: 'Layer 1',
          type: 'column',
          color: 'rgb(231, 231, 231)',
          data: [20, 30, 25, 22, 28, 30, 27, 26, 24, 29, 30, 21]
        },
        {
          name: 'Layer 2',
          type: 'column',
          color: '#BFA7F2',
          data: [25, 30, 20, 20, 25, 32, 28, 27, 25, 28, 30, 22]
        },
        {
          name: 'Layer 3',
          type: 'column',
          color: '#A285E8',
          data: [30, 25, 20, 28, 25, 25, 23, 24, 26, 28, 26, 20]
        }
      ]
    });
  }
  
  
}
