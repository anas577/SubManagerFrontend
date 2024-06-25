import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import { MatTableModule } from "@angular/material/table";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button"; // For mat-raised-button
import { CommonModule } from "@angular/common";
import {ApiService} from "../services/api.service";

@Component({
  selector: "app-subscription-form",
  standalone: true,
  imports: [
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: "./subscription-form.component.html",
  styleUrl: "./subscription-form.component.css",
})
export class SubscriptionFormComponent implements OnInit {
  providerName!: string;
  formData: any = {};
  subscription:any ={};

  constructor(private route: ActivatedRoute, private apiService:ApiService, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.providerName = params["provider"];
    });
  }

  submitForm() {
    this.subscription = {
      provider:{name: this.providerName } ,
      paymentCost: this.formData.paymentCost,
      plan: this.formData.plan,
      startDate: this.formData.startDate,
    };
    this.apiService.addSubscription(this.subscription).subscribe(
      (data) => {
        console.log("Subscription added successfully");
        this.router.navigate(["/subscriptions/list"]);
      },
      (error) => {
        console.error("Error adding subscription", error);
      }
    );
    // Here you can send the form data to your backend or perform any other necessary action

  }
}
