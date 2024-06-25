import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgxChartsModule} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    NgxChartsModule
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  barChartData: any[] = [
    { name: 'Jul', value: 10 },
    { name: 'Aug', value: 13 },
    { name: 'Sep', value: 20 },
    { name: 'Oct', value: 30 },
    { name: 'Nov', value: 40 },
    { name: 'Dec', value: 40},
    { name: 'Jan', value: 500 },
    { name: 'Feb', value: 800 },
    { name: 'Mar', value: 650 },
    { name: 'Apr', value: 700 },
    { name: 'May', value: 750 },
    { name: 'Jun', value: 900 }
  ];
  // Options for the bar chart
  barChartView: [number, number] = [1400, 400];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Month';
  yAxisLabel: string = 'Spending';
  barPadding: number = 30;
  colorScheme: string = 'vivid';

  constructor() {}

  ngOnInit(): void {}
}
