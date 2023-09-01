import { ParentProps, children } from "solid-js";
import { Sidebar, Topbar } from "@components/app";

export default function AppLayout(props: ParentProps) {
	const c = children(() => props.children);

	return (
		<main class="flex">
			<Sidebar />
			<div class="flex relative flex-col w-full h-screen bg-background">
				<Topbar />
				<div class="py-6 scrollarea">{c()}</div>
			</div>
		</main>
	);
}
