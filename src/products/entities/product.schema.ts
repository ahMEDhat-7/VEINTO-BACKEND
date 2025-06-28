// product.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop() name: string;
  @Prop() description: string;
  @Prop() price: number;
  @Prop() brand: string;
  @Prop() imageUrl: string;
  @Prop() stock: number;

  @Prop([{
    color: String,
    size: String,
    stock: Number
  }])
  variants: { color: string; size: string; stock: number }[];

  @Prop() isAvailable: boolean;

  @Prop({
    type: {
      views: Number,
      purchases: Number,
      ratingsCount: Number,
      lastViewedAt: Date,
      lastPurchasedAt: Date
    },
    default: {}
  })
  analytics: {
    views: number;
    purchases: number;
    ratingsCount: number;
    lastViewedAt: Date;
    lastPurchasedAt: Date;
  };
}

export const ProductSchema = SchemaFactory.createForClass(Product);
