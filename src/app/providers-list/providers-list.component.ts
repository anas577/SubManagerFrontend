import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";

@Component({
  selector: "app-providers-list",
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatTableModule],
  templateUrl: "./providers-list.component.html",
  styleUrl: "./providers-list.component.css",
})
export class ProvidersListComponent implements OnInit {
  providers: any[] = [];
  columnsToDisplay: string[] = ["provider"];

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.apiService.getProviders().subscribe(
      (data) => (this.providers = data),
      (error) => {
        console.error("Error fetching providers", error);
        this.router.navigate(["/login"]);
      },
    );
  }

  redirectToSubscriptionForm(providerName: string) {
    this.router.navigate(["subscription-form"], {
      queryParams: { provider: providerName },
    });
  }
}
