import {
  IsString,
  IsNumber,
  IsBoolean,
  IsArray,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

class ProductVariantDto {
  @IsString() color: string;
  @IsString() size: string;
  @IsNumber() stock: number;
}

class ProductAnalyticsDto {
  @IsNumber() views: number;
  @IsNumber() purchases: number;
  @IsNumber() ratingsCount: number;
  @IsOptional() lastViewedAt?: Date;
  @IsOptional() lastPurchasedAt?: Date;
}

export class CreateProductDto {
  @IsString() name: string;
  @IsString() description: string;
  @IsNumber() price: number;
  @IsString() brand: string;
  @IsString() imageUrl: string;
  @IsNumber() stock: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductVariantDto)
  variants: ProductVariantDto[];

  @IsBoolean() isAvailable: boolean;

  @ValidateNested()
  @Type(() => ProductAnalyticsDto)
  analytics: ProductAnalyticsDto;
}
