// order.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId: Types.ObjectId;

  @Prop([{
    productId: { type: Types.ObjectId, ref: 'Product' },
    name: String,
    price: Number,
    quantity: Number
  }])
  items: {
    productId: Types.ObjectId;
    name: string;
    price: number;
    quantity: number;
  }[];

  @Prop() total: number;
  @Prop() paymentMethod: string;

  @Prop({ enum: ['unpaid', 'paid'] })
  paymentStatus: 'unpaid' | 'paid';

  @Prop({ enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled'] })
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';

  @Prop({
    type: {
      label: String,
      street: String,
      city: String,
      country: String,
    }
  })
  shippingAddress: {
    label: string;
    street: string;
    city: string;
    country: string;
  };

  @Prop() notes: string;
}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);
