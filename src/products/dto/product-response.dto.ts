export class ProductResponseDto {
  _id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  imageUrl: string;
  stock: number;
  variants: { color: string; size: string; stock: number }[];
  isAvailable: boolean;
  analytics: {
    views: number;
    purchases: number;
    ratingsCount: number;
    lastViewedAt: Date;
    lastPurchasedAt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}
