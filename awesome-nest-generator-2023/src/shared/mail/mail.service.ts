import * as dayjs from "dayjs";
import { CustomLogger } from "~shared/logger/logger.service";

import { ISendMailOptions, MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {
	MailerConfig,
	mailerConfigName,
} from "~config/environment/mailer.config";
import {
	ClientUrlConfig,
	clientUrlConfigName,
} from "~config/environment/client-url.config";

@Injectable()
export class MailService {
	private clientUrlConfig: ClientUrlConfig;
	private mailerConfig: MailerConfig;

	constructor(
		private mailerService: MailerService,
		private configService: ConfigService,
		private readonly logger: CustomLogger,
	) {
		this.mailerConfig = this.configService.get<MailerConfig>(mailerConfigName);
		this.clientUrlConfig =
			this.configService.get<ClientUrlConfig>(clientUrlConfigName);
	}

	sendMail(options: ISendMailOptions) {
		return this.mailerService.sendMail(options);
	}

	async sendOTP(
		verificationCode: string,
		to: string,
		subject: string,
		from?: string,
	) {
		const { name, defaults } = this.mailerConfig;
		const params = {
			from: from ?? `"${name} ⭐" <${defaults.from}>`,
			to,
			subject,
			template: "./otp/otp.template.hbs",
			context: { verificationCode },
		};

		// send mail
		return this.sendMail(params).then((result) => {
			this.logger.log(
				`Send a OTP to email:"${to}" successfully!`,
				MailService.name,
			);
			return result;
		});
	}

	async sendRegisterToken(
		body: { token: string; expiresAt: number; fullName: string },
		to: string,
		from?: string,
	) {
		const { name, defaults } = this.mailerConfig;
		const { verifyAccountUrl } = this.clientUrlConfig;

		const expiresIn = dayjs(body.expiresAt).diff(dayjs(Date.now()), "minute");

		const verificationLink = `${verifyAccountUrl}?token=${body.token}`;

		// options
		const options = {
			from: from ?? `"${name} ⭐" <${defaults.from}>`,
			to,
			subject: "Register account.",
			template: "./verify/account-register.template.hbs",
			context: { verificationLink, expiresIn, fullName: body.fullName },
		};

		// Send
		return this.sendMail(options)
			.then((result) => {
				this.logger.log(
					`Send a SIGNUP_TOKEN to email:"${to}" successfully!`,
					MailService.name,
				);
				return result;
			})
			.catch((err) => {
				this.logger.error(
					[`Send a SIGNUP_TOKEN to email:"${to}" failure!`, err],
					MailService.name,
				);
			});
	}

	async sendForgotPasswordToken(
		body: { token: string; expiresAt: number; fullName: string },
		to: string,
		from?: string,
	) {
		const { name, defaults } = this.mailerConfig;
		const { resetPasswordUrl } = this.clientUrlConfig;

		const expiresIn = dayjs(body.expiresAt).diff(dayjs(Date.now()), "minute");
		const resetPasswordLink = `${resetPasswordUrl}?token=${body.token}`;

		// options
		const options: ISendMailOptions = {
			to,
			subject: "Forgot Password - Reset Your Password",
			template: "./verify/password-reset.template.hbs",
			context: { resetPasswordLink, expiresIn, fullName: body.fullName },
			from: from ?? `"${name}" <${defaults.from}>`,
		};

		// Send
		return this.sendMail(options)
			.then((result) => {
				this.logger.log(
					`Send a FORGOT_PASSWORD_TOKEN to email:"${to}" successfully!`,
					MailService.name,
				);

				return result;
			})
			.catch((err) => {
				this.logger.log(
					[`Send a FORGOT_PASSWORD_TOKEN to email:"${to}" failure!`, err],
					MailService.name,
				);
			});
	}
}
