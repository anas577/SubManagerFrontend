import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {Router} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AsyncPipe, CommonModule, NgFor} from "@angular/common";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgxChartsModule} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-dashboard',
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
    NgxChartsModule,
    NgFor,
    AsyncPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  payments: any[] = []; // This will hold your fetched data
  pieChartData: any[] = []; // This will hold the formatted data for the pie chart
  totalSpendings: number = 0; // This will hold the total amount spent
  // Options for the pie chart
  view: [number,number] = [700, 400];
  showLegend: boolean = true;
  showLabels: boolean = true;
  explodeSlices: boolean = false;
  doughnut: boolean = false;

  colorScheme: string = 'vivid';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPayments().subscribe(
      (data: any[]) => {
        this.payments = data;
        this.formatChartData();
      },
      (error) => {
        console.error('Error fetching payments', error);
      }
    );
  }

  formatChartData(): void {
    const providerSums = this.payments.reduce((acc, payment) => {
      const providerName = payment.subscription.provider.name;
      if (!acc[providerName]) {
        acc[providerName] = 0;
      }
      acc[providerName] += payment.amount;
      this.totalSpendings += payment.amount;
      return acc;
    }, {});

    this.pieChartData = Object.keys(providerSums).map(providerName => ({
      name: providerName,
      value: providerSums[providerName]
    }));
  }
}
