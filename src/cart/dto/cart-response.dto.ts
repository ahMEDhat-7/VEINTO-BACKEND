export class CartResponseDto {
  _id: string;
  userId: string;
  items: {
    productId: string;
    quantity: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
}
