import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { Subscription } from "../models/model";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
@Component({
  selector: "app-subscriptions-list",
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatTableModule],
  templateUrl: "./subscriptions-list.component.html",
  styleUrl: "./subscriptions-list.component.css",
})
export class SubscriptionsListComponent implements OnInit {
  subscriptions: Subscription[] = [];
  columnsToDisplay: string[] = ["id", "provider", "paymentCost"];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllSubscriptions().subscribe((subscriptions) => {
      this.subscriptions = subscriptions;
    });
  }
}
