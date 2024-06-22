export interface SideNavItem {
  title: string;
  link: string;
}

export interface Subscription {
  id: number;
  provider: string;
  paymentCost: number;
  description: string;
}
