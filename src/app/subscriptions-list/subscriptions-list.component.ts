import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { Subscription } from "../models/model";

@Component({
  selector: "app-subscriptions-list",
  standalone: true,
  imports: [],
  templateUrl: "./subscriptions-list.component.html",
  styleUrl: "./subscriptions-list.component.css",
})
export class SubscriptionsListComponent implements OnInit {
  subscriptions: Subscription[] = [];

  ngOnInit(): void {}
}
