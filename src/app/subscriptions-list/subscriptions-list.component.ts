import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { Router } from "@angular/router";
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
@Component({
  selector: "app-subscriptions-list",
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatTableModule, MatButton, MatCardActions, MatCardContent, MatCardTitle, MatCard, MatCardSubtitle, MatCardHeader, MatGridTile, MatGridList],
  templateUrl: "./subscriptions-list.component.html",
  styleUrl: "./subscriptions-list.component.css",
})
export class SubscriptionsListComponent implements OnInit {
  subscriptions: any[] = [];
  columnsToDisplay: string[] = ["id", "provider", "paymentCost", "Switch-Status"];
  staticSubscriptions: any[] = [
    {
      id: 1,
      provider: {
        name:"Netflix",
      },
      paymentCost: 12.99,
      status: "Active",
    },
    {
      id: 2,
      provider: {
        name:"Spotify",
      },
      paymentCost: 9.99,
      status: "Active",
    },
    {
      id: 3,
      provider: {
        name:"Hulu",
      },
      paymentCost: 5.99,
      status: "Active",
    },
    {
      id: 4,
      provider: {
        name:"Disney+",
      },
      paymentCost: 6.99,
      status: "Active",
    },
    {
      id: 5,
      provider: {
        name:"Apple Music",
      },
      paymentCost: 4.99,
      status: "Active",
    },
    {
      id: 6,
      provider: {
        name:"Amazon Prime",
      },
      paymentCost: 8.99,
      status: "Active",
    },
    {
      id: 7,
      provider: {
        name:"HBO Max",
      },
      paymentCost: 14.99,
      status: "Active",
    },
    {
      id: 8,
      provider: {
        name:"YouTube Premium",
      },
      paymentCost: 11.99,
      status: "Active",
    },
    {
      id: 9,
      provider: {
        name:"Pandora",
      },
      paymentCost: 4.99,
      status: "Active",
    },
    {
      id: 10,
      provider: {
        name:"Tidal",
      },
      paymentCost: 9.99,
      status: "Active",
    }
    ]
  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  changeStatus(id:any) {
    this.apiService.changeStatus(id).subscribe(
      (data) => {
        console.log('Subscription status changed');
        // Refetch the subscriptions after status change
        this.fetchSubscriptions();
      },
      (error) => {
        console.error('Error changing subscription status', error);
      }
    );
  }

  fetchSubscriptions(): void {
    this.apiService.getAllSubscriptions().subscribe(
      (data) => this.subscriptions = data,
      (error) => {
        console.error('Error fetching subscriptions', error);
        this.router.navigate(['/login']);
      }
    );
  }

  ngOnInit(): void {
    this.fetchSubscriptions();
    console.log(this.subscriptions);
  }
}
