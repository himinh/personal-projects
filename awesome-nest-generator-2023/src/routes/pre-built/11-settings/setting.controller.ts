import { Types } from "mongoose";
import { GetAqp } from "~decorators/get-aqp.decorator";
import { Public } from "~decorators/public.decorator";
import { AqpDto } from "~dto/aqp.dto";
import { ParseObjectIdPipe } from "~utils/parse-object-id.pipe";

import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Patch,
	Post,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

import { CreateSettingDto } from "./dto/create-setting.dto";
import { UpdateSettingDto } from "./dto/update-setting.dto";
import { SettingService } from "./setting.service";
import { stringIdToObjectId } from "~utils/stringId_to_objectId";

@ApiTags("Settings")
@Controller("settings")
export class SettingController {
	constructor(private readonly settingService: SettingService) {}

	//  ----- Method: GET -----
	@Public()
	@Get("one")
	@HttpCode(HttpStatus.OK)
	async findOne(@GetAqp() { filter, ...options }: AqpDto) {
		return this.settingService.findOne(filter, options);
	}

	@Public()
	@Get(":id")
	@HttpCode(HttpStatus.OK)
	async findOneById(
		@Param("id", ParseObjectIdPipe) id: Types.ObjectId,
		@GetAqp() { projection, populate }: AqpDto,
	) {
		return this.settingService.findById(id, { projection, populate });
	}

	//  ----- Method: POST -----
	@ApiBearerAuth()
	@Post()
	@HttpCode(HttpStatus.CREATED)
	async create(@Body() body: CreateSettingDto) {
		return this.settingService.create(body);
	}
	//  ----- Method: PATCH -----
	@ApiBearerAuth()
	@Patch(":id")
	@HttpCode(HttpStatus.OK)
	async update(
		@Param("id", ParseObjectIdPipe) id: Types.ObjectId,
		@Body() body: UpdateSettingDto,
	) {
		return this.settingService.updateById(id, body);
	}

	//  ----- Method: DELETE -----
	@ApiBearerAuth()
	@Delete(":ids/ids")
	@HttpCode(HttpStatus.OK)
	async deleteManyByIds(@Param("ids") ids: string) {
		return this.settingService.deleteMany({
			_id: { $in: ids.split(",").map(stringIdToObjectId) },
		});
	}

	@ApiBearerAuth()
	@Delete(":id")
	@HttpCode(HttpStatus.OK)
	async delete(@Param("id", ParseObjectIdPipe) id: Types.ObjectId) {
		return this.settingService.deleteById(id);
	}
}
