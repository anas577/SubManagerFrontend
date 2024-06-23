import { Component, Output, EventEmitter } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import {AuthService} from "../services/auth.service";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: "page-header",
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, MatMenuModule, NgIf, MatIconButton, RouterLink],
  templateUrl: "./page-header.component.html",
  styleUrl: "./page-header.component.css",
})
export class PageHeaderComponent {
  @Output() menuClicked = new EventEmitter<boolean>();
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
