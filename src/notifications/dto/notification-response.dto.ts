export class NotificationResponseDto {
  _id: string;
  userId: string;
  type: 'order_update' | 'promo' | 'admin_message';
  message: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}
