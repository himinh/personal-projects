import { PaginateModel } from "mongoose";
import { BaseService } from "~base-inherit/base.service";

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Discount, DiscountDocument } from "./schemas/discount.schema";

@Injectable()
export class DiscountService extends BaseService<DiscountDocument> {
	constructor(
		@InjectModel(Discount.name) model: PaginateModel<DiscountDocument>,
	) {
		super(model);
	}
}
