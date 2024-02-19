import { registerAs } from "@nestjs/config";
import { FileType } from "~utils/types/file.type";

export const uploadConfigName = "upload";

export interface FileOption {
	maxSize: number;
	allowedExtensions: string[];
}

export interface UploadConfig {
	image: FileOption;
	video: FileOption;
	audio: FileOption;
	auto: FileOption;
	raw: FileOption;
	storageFolders: Record<FileType, string>;
}

export const uploadEnv = registerAs(
	uploadConfigName,
	(): UploadConfig => ({
		auto: {
			allowedExtensions: process.env.UPLOAD_AUTO_EXT.split("|"),
			maxSize: +process.env.UPLOAD_AUTO_MAX_SIZE,
		},
		audio: {
			allowedExtensions: process.env.UPLOAD_AUDIO_EXT.split("|"),
			maxSize: +process.env.UPLOAD_AUDIO_MAX_SIZE,
		},
		video: {
			allowedExtensions: process.env.UPLOAD_VIDEO_EXT.split("|"),
			maxSize: +process.env.UPLOAD_VIDEO_MAX_SIZE,
		},
		image: {
			allowedExtensions: process.env.UPLOAD_IMAGE_EXT.split("|"),
			maxSize: +process.env.UPLOAD_IMAGE_MAX_SIZE,
		},
		raw: {
			allowedExtensions: process.env.UPLOAD_RAW_EXT.split("|"),
			maxSize: +process.env.UPLOAD_RAW_MAX_SIZE,
		},
		storageFolders: {
			image: process.env.UPLOAD_IMAGE_FOLDER,
			video: process.env.UPLOAD_VIDEO_FOLDER,
			audio: process.env.UPLOAD_AUDIO_FOLDER,
			raw: process.env.UPLOAD_RAW_FOLDER,
			auto: process.env.UPLOAD_AUTO_FOLDER,
		},
	}),
);
