// vendors
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

// constants
import { TYPES_OF_CHARTS, DEFAULT_CHART } from 'src/app/constants/constants';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.sass'],
})
export class ChartComponentComponent implements OnInit {
  @Input() yearSelected: string;
  @Input() dataFromAPI: any;

  public chartTypes = TYPES_OF_CHARTS;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType = DEFAULT_CHART.type;
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.resetDataChart();
    this.getArrrayOfYears(this.dataFromAPI);
  }

  private getDatabyYear = (yearToFilter, arrayData) => {
    return arrayData.filter(({ year }) => year == yearToFilter);
  };

  private getArrrayOfYears = (arrayData) => {
    const pregnantsArray = [],
      kidsArray = [];

    this.getDatabyYear(this.yearSelected, arrayData).map(({ year, months }) => {
      months.map(({ monthName, pregnantsAmount, kidsAmount }) => {
        this.barChartLabels.push(monthName);
        pregnantsArray.push(pregnantsAmount);
        kidsArray.push(kidsAmount);
      });
    });

    this.barChartData = [
      { label: 'Gestantes', data: pregnantsArray },
      { label: 'Niños', data: kidsArray },
    ];
  };

  private resetDataChart = () => {
    this.barChartLabels = [];
    this.barChartData = [];
  };
}
