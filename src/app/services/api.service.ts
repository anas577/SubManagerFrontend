import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Subscription } from "../models/model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseUrl = "https://localhost:8085";

  constructor(private http: HttpClient) {}

  getAllSubscriptions(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(`${this.baseUrl}/subscriptions`);
  }
}
