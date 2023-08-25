import { ComponentProps, ParentProps } from "solid-js";
import { twMerge } from "tailwind-merge";

type LabelProps = ComponentProps<"label">;

export default function Label(props: ParentProps<LabelProps>) {
  const classes = twMerge("block text-sm font-medium text-convex-500 mb-1", props?.class ?? "");

  return (
    <label {...props} class={classes}>
      {props.children}
    </label>
  );
}
