import { GetAllEntriesInCurrentRoot } from "@convex/wailsjs/go/filesystem/Filesystem";
import { For, Show, createResource } from "solid-js";
import { IoFolder } from "solid-icons/io";
import { TbFile } from "solid-icons/tb";

export default function Explorer() {
	const [entries] = createResource(() => GetAllEntriesInCurrentRoot());

	return (
		<div class="px-4">
			<Show when={entries.loading}>
				<p>Loading...</p>
			</Show>
			<Show when={entries.error}>
				<p>Error: {entries.error.message}</p>
			</Show>
			<Show when={entries()}>
				<div class="grid grid-cols-4">
					<For each={entries()}>
						{(entry) =>
							entry.isDir ? (
								<div>
									<IoFolder class="w-14 h-14 text-blue-500" />
									<p class="w-3/5 text-ellipsis">{entry.name}</p>
								</div>
							) : (
								<div>
									<TbFile class="w-14 h-14 text-blue-500" />
									<p class="w-3/5 text-ellipsis">{entry.name}</p>
								</div>
							)
						}
					</For>
				</div>
			</Show>
		</div>
	);
}
