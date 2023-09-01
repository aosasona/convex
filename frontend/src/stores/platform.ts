import { GetPlatform } from "@convex/wailsjs/go/platform/Platform";
import { atom, onMount } from "nanostores";

export type Platform = "darwin" | "windows" | "linux" | "unknown";

export const $platform = atom<Platform>("unknown");

onMount($platform, () => {
	GetPlatform()
		.then((platform) => {
			$platform.set(platform);
		})
		.catch((err) => {
			console.error(err);
		});
});
