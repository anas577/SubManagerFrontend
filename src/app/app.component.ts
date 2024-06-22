 import { Component, ViewChild } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PageHeaderComponent } from "./page-header/page-header.component";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { PageFooterComponent } from "./page-footer/page-footer.component";
 import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    PageHeaderComponent,
    SideNavComponent,
    MatListModule,
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    PageFooterComponent,
    HttpClientModule
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "SubsManagerFrontend";
}
