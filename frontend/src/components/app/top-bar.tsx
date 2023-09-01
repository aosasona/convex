import { Show, createResource } from "solid-js";
import { GetRoot } from "@wails/filesystem/Filesystem";
import { Search, ChevronLeft } from "lucide-solid";
import { IconInput } from "../ui";

export default function TopBar() {
	const [root] = createResource(GetRoot);

	return (
		<div class="flex justify-between items-center py-2 px-4 w-full border-b-2 transition-all backdrop-blur-md bg-background/50 border-b-accent draggable">
			<div class="flex gap-2 items-center">
				<button class="p-1 rounded-md transition-colors aspect-square hover:bg-convex-900">
					<ChevronLeft size={18} class="text-convex-400" />
				</button>

				<Show when={!root.loading}>
					<p class="py-0.5 px-2 w-max text-xs rounded-md cursor-pointer text-ellipsis bg-convex-900 text-convex-200 not-draggable">{root()?.name}</p>
				</Show>
			</div>

			<IconInput icon={Search} inputProps={{ placeholder: "Search" }} />
		</div>
	);
}
