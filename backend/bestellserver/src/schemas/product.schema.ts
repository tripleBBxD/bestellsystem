import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>

@Schema()
export class Product {
    @Prop()
    id: string

    @Prop()
    productName: string
    
    @Prop()
    price: number

    @Prop()
    img: string
}

export const ProductSchema = SchemaFactory.createForClass(Product)