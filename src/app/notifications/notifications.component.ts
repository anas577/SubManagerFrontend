import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ApiService} from "../services/api.service";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatCard, MatCardHeader, MatCardActions, MatButton, MatCardTitle, MatIcon],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit{
  notifications: any[] = [];
  noNotifications: any;

  constructor(private apiService: ApiService) {}

  fetchNotifications(): void {
    this.apiService.getNotifications().subscribe(
      (data) => {
        this.notifications = data;
        console.log('Notifications fetched');
        console.log(data);
      },
      (error) => {
        console.error('Error fetching notifications', error);
      }
    );
  }

  ngOnInit(): void {
    this.fetchNotifications();

  }

  deleteNotification(id: number) {
    this.apiService.deleteNotification(id).subscribe(
      (data) => {
        console.log('Notification deleted');
        this.fetchNotifications();
      },
      (error) => {
        console.error('Error deleting notification', error);
      }
    );

  }
}
