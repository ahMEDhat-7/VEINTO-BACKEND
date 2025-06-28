export class ReviewResponseDto {
  _id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  images?: string[];
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}
