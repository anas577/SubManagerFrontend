import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseUrl = "http://localhost:8085";

  constructor(private http: HttpClient) {}

  getAllSubscriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/subscriptions`);
  }

  getProviders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/providers`);
  }

  changeStatus(id: any) {
    return this.http.put(`${this.baseUrl}/subscriptions/changeStatus/${id}`, {});

  }

  getPayments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/payments`);
  }
}
