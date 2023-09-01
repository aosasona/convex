import { useStore } from "@nanostores/solid";
import { Label } from "../ui";
import { $platform } from "@stores/platform";

export default function Sidebar() {
	const platform = useStore($platform);

	return (
		<div
			class="px-3 space-y-3 w-1/4 border-r backdrop-blur-2xl border-r-accent"
			classList={{
				"pt-12": platform() == "darwin",
				"bg-background/50": platform() == "darwin",
				"bg-background": platform() !== "darwin",
			}}>
			<div>
				<Label>Favourites</Label>
				<div class="flex flex-col w-full"></div>
			</div>

			<div>
				<Label>Pinned</Label>
				<div class="flex flex-col w-full"></div>
			</div>
		</div>
	);
}
