import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { Router } from "@angular/router";
@Component({
  selector: "app-subscriptions-list",
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatTableModule],
  templateUrl: "./subscriptions-list.component.html",
  styleUrl: "./subscriptions-list.component.css",
})
export class SubscriptionsListComponent implements OnInit {
  subscriptions: any[] = [];
  columnsToDisplay: string[] = ["id", "provider", "paymentCost"];

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.apiService.getAllSubscriptions().subscribe(
      (data) => (this.subscriptions = data),
      (error) => {
        console.error("Error fetching subscriptions", error);
        this.router.navigate(["/login"]);
      },
    );
  }

  changeStatus(id:any) {
    this.apiService.changeStatus(id).subscribe(
      () => {
        this.subscriptions = this.subscriptions.map((subscription) => {
          if (subscription.id === id) {
            subscription.active = !subscription.active;
          }
          return subscription;
        });
      },
      (error) => console.error("Error changing subscription status", error),
    );

  }
}
