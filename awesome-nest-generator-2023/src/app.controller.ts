import { Public } from "~decorators/public.decorator";
import { ChannelName } from "~shared/redis-feature/channel";
import { RedisFeatureService } from "~shared/redis-feature/redis-feature.service";

import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("App")
@Controller()
export class AppController {
	constructor(private readonly redisFeatureService: RedisFeatureService) {}

	@Get("publish")
	async publish() {
		await this.redisFeatureService.publishMessage(
			ChannelName.Order,
			"Hello from Order!",
		);
		return "Message published";
	}

	@Public()
	@Get("publish2")
	async publish2() {
		await this.redisFeatureService.publishMessage(
			ChannelName.Test,
			"Hello from Test!",
		);
		return "Message published";
	}

	@Public()
	@Get("publish3")
	async publish3() {
		await this.redisFeatureService.publishMessage(
			ChannelName.Test2,
			"Hello from Test!",
		);
		return "Message published";
	}

	@Public()
	@Get("subscribe")
	async subscribe() {
		this.redisFeatureService.subscribeToChannel(
			ChannelName.Order,
			(message) => {
				console.log("Received message:", message);
			},
		);
		return "Subscribed to channel";
	}

	@Public()
	@Get("subscribe1")
	async subscribe1() {
		this.redisFeatureService.subscribeToChannel(ChannelName.Test, (message) => {
			console.log("Received message:", message);
		});
		return "Subscribed to channel";
	}

	@Public()
	@Get("subscribe2")
	async subscribe2() {
		this.redisFeatureService.subscribeToChannel(
			ChannelName.Test2,
			(message) => {
				console.log("Received message:", message);
			},
		);
		return "Subscribed to channel";
	}
}
