import { ProductModule } from "~routes/1-products/product.module";

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CartController } from "./cart.controller";
import { CartService } from "./cart.service";
import { Cart, CartSchema } from "./schemas/cart.schema";

@Module({
	imports: [
		MongooseModule.forFeatureAsync([
			{
				name: Cart.name,
				useFactory: () => {
					const schema = CartSchema;

					// eslint-disable-next-line
					schema.plugin(require("mongoose-slug-updater"));

					return schema;
				},
			},
		]),
		ProductModule,
	],
	controllers: [CartController],
	providers: [CartService],
	exports: [CartService],
})
export class CartModule {}
