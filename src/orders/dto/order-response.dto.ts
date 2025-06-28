export class OrderResponseDto {
  _id: string;
  userId: string;
  items: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  total: number;
  paymentMethod: string;
  paymentStatus: 'unpaid' | 'paid';
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: {
    label: string;
    street: string;
    city: string;
    country: string;
  };
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
