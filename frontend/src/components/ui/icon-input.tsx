import { createSignal, ComponentProps, JSX } from "solid-js";
import { LucideProps } from "lucide-solid/dist/types/types";
import { twMerge } from "tailwind-merge";

type IconInputProps = {
  inputProps?: ComponentProps<"input">;
  iconProps?: LucideProps;
  icon: (props: LucideProps) => JSX.Element;
  containerClasses?: string;
};

export default function IconInput(props: IconInputProps) {
  const [focused, setFocused] = createSignal(false);

  function onFocus() {
    setFocused(true);
    props.inputProps?.onFocus;
  }

  function onBlur() {
    setFocused(false);
    props?.inputProps?.onBlur;
  }

  const containerClasses = twMerge(
    "flex overflow-hidden items-center w-2/6 h-7 rounded-md transition-all max-w-[16rem] bg-convex-900/60 not-draggable border-[0.1rem] border-convex-800",
    props.containerClasses ?? ""
  );
  const inputClasses = twMerge("bg-transparent focus:outline-none text-[0.8rem] placeholder:text-convex-600", props.inputProps?.class ?? "");
  const iconClasses = twMerge("text-convex-600", props.iconProps?.class ?? "");

  const Icon = props.icon;

  return (
    <div class={containerClasses} classList={{ "ring-2 ring-blue-500": focused() }}>
      <div class="px-2">
        <Icon {...props?.iconProps} size={props?.iconProps?.size || 14} class={iconClasses} />
      </div>
      <input
        {...props?.inputProps}
        name={props?.inputProps?.name ?? ""}
        type={props?.inputProps?.type ?? "text"}
        autofocus={props?.inputProps?.autofocus ?? false}
        autocomplete={props?.inputProps?.autocomplete ?? "off"}
        autocorrect={props?.inputProps?.autocorrect ?? "off"}
        autocapitalize={props?.inputProps?.autocapitalize ?? "off"}
        class={inputClasses}
        placeholder={props?.inputProps?.placeholder ?? ""}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={props?.inputProps?.onChange}
      />
    </div>
  );
}
