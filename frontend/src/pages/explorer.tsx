import { GetAllEntriesInCurrentRoot } from "@convex/wailsjs/go/filesystem/Filesystem";
import { Button, Label } from "@ui";
import { Show, createResource } from "solid-js";

export default function Explorer() {
  // const [entries] = createResource(() => GetAllEntriesInCurrentRoot());

  return (
    <div class="px-4">
      <div class="mt-4">
        <Label class="mb-1.5">Active</Label>
        <div class="flex gap-4 items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>

      <div class="mt-4">
        <Label class="mb-1.5">Disabled</Label>
        <div class="flex gap-4 items-center">
          <Button variant="primary" disabled>
            Primary
          </Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="ghost" disabled>
            Ghost
          </Button>
          <Button variant="danger" disabled>
            Danger
          </Button>
        </div>
      </div>
    </div>
  );
}
