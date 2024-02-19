import { HydratedDocument } from "mongoose";

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
	timestamps: true,
	versionKey: false,
	collection: "provinces",
})
export class Province {
	@Prop({ type: String, required: true })
	readonly name: string;

	@Prop({ type: String, slug: "name", unique: true })
	readonly slug: string;
}

export type ProvinceDocument = Province & HydratedDocument<Province>;
export const ProvinceSchema = SchemaFactory.createForClass(Province);
