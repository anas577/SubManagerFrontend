import { Component } from "@angular/core";
import { SideNavItem } from "../models/model";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";

@Component({
  selector: "side-nav",
  standalone: true,
  imports: [MatListModule, CommonModule, RouterModule, MatSidenavModule],
  templateUrl: "./side-nav.component.html",
  styleUrl: "./side-nav.component.css",
})
export class SideNavComponent {
  sideNavContent: SideNavItem[] = [
    {
      title: "Dashboard",
      link: "dashboard",
    },
    {
      title: "Subscriptions",
      link: "susbscriptions/list",
    },
    {
      title: "Notifications",
      link: "notifications",
    },
    {
      title: "Settings",
      link: "settings",
    },
  ];
}
