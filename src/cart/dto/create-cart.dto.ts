import { IsString, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

class CartItemDto {
  @IsString() productId: string;
  @IsNumber() quantity: number;
}

export class CreateCartDto {
  @IsString() userId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartItemDto)
  items: CartItemDto[];
}
