import { Component, Output, EventEmitter } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

@Component({
  selector: "page-header",
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, MatMenuModule],
  templateUrl: "./page-header.component.html",
  styleUrl: "./page-header.component.css",
})
export class PageHeaderComponent {
  @Output() menuClicked = new EventEmitter<boolean>();
  constructor() {}

  logOut() {
    // log out logic here
  }
}
