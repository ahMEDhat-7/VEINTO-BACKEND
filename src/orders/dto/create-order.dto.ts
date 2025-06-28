import {
  IsString,
  IsNumber,
  IsEnum,
  IsArray,
  ValidateNested,
  IsObject,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @IsString() productId: string;
  @IsString() name: string;
  @IsNumber() price: number;
  @IsNumber() quantity: number;
}

class ShippingAddressDto {
  @IsString() label: string;
  @IsString() street: string;
  @IsString() city: string;
  @IsString() country: string;
}

export class CreateOrderDto {
  @IsString() userId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @IsNumber() total: number;
  @IsString() paymentMethod: string;

  @IsEnum(['unpaid', 'paid'])
  paymentStatus: 'unpaid' | 'paid';

  @IsEnum(['pending', 'paid', 'shipped', 'delivered', 'cancelled'])
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';

  @ValidateNested()
  @Type(() => ShippingAddressDto)
  shippingAddress: ShippingAddressDto;

  @IsOptional()
  @IsString()
  notes?: string;
}
