import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

@Component({
  selector: "page-footer",
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, MatMenuModule],
  templateUrl: "./page-footer.component.html",
  styleUrl: "./page-footer.component.css",
})
export class PageFooterComponent {}
