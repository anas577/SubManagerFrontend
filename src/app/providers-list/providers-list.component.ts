import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { FormsModule } from '@angular/forms';

@Component({
  selector: "app-providers-list",
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatTableModule, FormsModule],
  templateUrl: "./providers-list.component.html",
  styleUrl: "./providers-list.component.css",
})
export class ProvidersListComponent implements OnInit {
  providers: any[] = [];
  columnsToDisplay: string[] = ["provider"];
  search: string = "";

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  searchProviders(): void {
    this.apiService.getProviders(this.search).subscribe(
      (data) => (this.providers = data),
      (error) => {
        console.error("Error fetching providers", error);
        this.router.navigate(["/login"]);
      },
    );
  }

  ngOnInit(): void {
    this.apiService.getProviders(this.search).subscribe(
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
