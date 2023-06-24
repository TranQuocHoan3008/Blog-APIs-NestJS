import { User } from './user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: String })
  content: string;

  @Prop({ required: true, type: String })
  imageUrl: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  creator: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
