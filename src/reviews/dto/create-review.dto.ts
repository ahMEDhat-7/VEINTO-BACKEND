import { IsString, IsNumber, IsArray, IsIn, IsOptional } from 'class-validator';

export class CreateReviewDto {
  @IsString() userId: string;
  @IsString() productId: string;
  @IsNumber() rating: number;
  @IsString() comment: string;

  @IsArray()
  @IsOptional()
  images?: string[];

  @IsIn(['pending', 'approved', 'rejected'])
  @IsOptional()
  status?: 'pending' | 'approved' | 'rejected';
}
