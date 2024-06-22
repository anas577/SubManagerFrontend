import { Routes, RouterModule } from "@angular/router";
import { SubscriptionsListComponent } from "./subscriptions-list/subscriptions-list.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { SettingsComponent } from "./settings/settings.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
export const routes: Routes = [
  { path: "user-profile", component: UserProfileComponent },
  { path: "settings/view", component: SettingsComponent },
  { path: "notifications/view", component: NotificationsComponent },
  { path: "dashboard/view", component: DashboardComponent },
  { path: "susbscriptions/list", component: SubscriptionsListComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: HomeComponent, canActivate: [AuthGuard] }, // Protected route
];
