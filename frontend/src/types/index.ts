export type User = {
    _id: string;
    email: string;
    name: string;
    addressLine1: string;
    city: string,
    country: string
}

export type OrderStatus =
  | "placed"
  | "paid"
  | "inProgress"
  | "outForDelivery"
  | "delivered";