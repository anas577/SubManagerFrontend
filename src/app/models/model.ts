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

export interface Provider {
  id : number;
  name: string;
  image: string;
}
