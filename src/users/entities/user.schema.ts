import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// user.schema.ts
@Schema({ timestamps: true })
export class User {
  @Prop() username: string;
  @Prop() email: string;
  @Prop() password: string;

  @Prop({ enum: ['user', 'admin'], default: 'user' })
  role: 'user' | 'admin';
}

export const UserSchema = SchemaFactory.createForClass(User);
