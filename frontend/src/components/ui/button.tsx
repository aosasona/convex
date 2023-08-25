import { ComponentProps, ParentProps } from "solid-js";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "ghost" | "danger";

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  primary: "bg-blue-500 hover:bg-blue-600 border border-blue-600",
  secondary: "bg-convex-900 hover:bg-convex-800 border border-convex-800 hover:border-convex-700",
  ghost: "border border-convex-800 hover:border-convex-600",
  danger: "bg-red-500 hover:bg-red-600 border border-red-400 hover:border-red-500",
};

export default function Button(props: ParentProps<ButtonProps>) {
  const classes = twMerge("rounded-md text-sm font-medium px-3 py-1 transition-all", variants[props?.variant ?? "primary"], props?.class ?? "");
  return (
    <button {...props} class={classes} classList={{ "opacity-50 cursor-not-allowed": props.disabled ?? false }}>
      {props.children}
    </button>
  );
}
