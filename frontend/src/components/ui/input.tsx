import { ComponentProps, createSignal } from "solid-js";
import { twMerge } from "tailwind-merge";

type InputProps = ComponentProps<"input"> & {};

export default function Input(props: InputProps) {
  const [focused, setFocused] = createSignal(false);

  function onFocus() {
    setFocused(true);
    props.onFocus;
  }

  function onBlur() {
    setFocused(false);
    props.onBlur;
  }

  const classes = twMerge(
    `text-[13px] rounded-md transition-all focus:outline-none placeholder:text-convex-600 max-w-[18rem] bg-convex-900/60 not-draggable border-[0.1rem] border-convex-800 px-2 py-1`,
    props.class
  );

  return (
    <input
      {...props}
      name={props.name ?? ""}
      type={props.type ?? "text"}
      autofocus={props.autofocus ?? false}
      autocomplete={props.autocomplete ?? "off"}
      autocorrect={props.autocorrect ?? "off"}
      autocapitalize={props.autocapitalize ?? "off"}
      class={classes}
      placeholder={props.placeholder ?? ""}
      onFocus={onFocus}
      onBlur={onBlur}
      classList={{ "ring-2 ring-blue-500": focused() }}
      onChange={props.onChange}
    />
  );
}
