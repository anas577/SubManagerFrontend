import { Routes, RouterModule } from "@angular/router";
import { SubscriptionsListComponent } from "./subscriptions-list/subscriptions-list.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth.guard";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }, // Protected route
  // Add other routes here
];
