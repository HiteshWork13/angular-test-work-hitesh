import { Component, OnInit } from '@angular/core';
import { chartJSON } from '@configJson';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart-dashbaord',
  templateUrl: './chart-dashbaord.component.html',
  styleUrls: ['./chart-dashbaord.component.scss']
})
export class ChartDashbaordComponent implements OnInit {

  chartData: any = JSON.parse(JSON.stringify(chartJSON as any));
  data: any = this.chartData.chartData;
  chartLine: any;

  constructor() {
    console.log("data", this.data);
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.chartLine = new Chart('demo', {
      type: this.data[0].type,
      data: this.data[0].chart_data,
      options: this.data[0].chart_options as any,
    });
  }

  switchChart(type: string) {
    switch (type) {
      case 'bar':
        this.chartLine.config.type = 'bar';
        this.chartLine.update();
        break;
      case 'pie':
        this.chartLine.config.type = 'pie';
        this.chartLine.update();
        break;
    }
  }

}
