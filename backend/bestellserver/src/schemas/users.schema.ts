import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
    @Prop()
    id: string

    @Prop()
    userName: string

    @Prop()
    balance: number

}

export const UserSchema = SchemaFactory.createForClass(User)