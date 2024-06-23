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
  { path: "user-profile", component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: "settings/view", component: SettingsComponent, canActivate: [AuthGuard] },
  { path: "notifications/view", component: NotificationsComponent, canActivate: [AuthGuard] },
  { path: "dashboard/view", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "subscriptions/list", component: SubscriptionsListComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "", component: HomeComponent, canActivate: [AuthGuard] }, // Protected route
];
