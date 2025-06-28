import { IsString, IsIn, IsBoolean } from 'class-validator';

export class CreateNotificationDto {
  @IsString() userId: string;

  @IsIn(['order_update', 'promo', 'admin_message'])
  type: 'order_update' | 'promo' | 'admin_message';

  @IsString() message: string;
  @IsBoolean() read: boolean;
}
