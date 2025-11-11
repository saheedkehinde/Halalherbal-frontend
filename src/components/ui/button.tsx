import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 whitespace-nowrap rounded-md text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[4px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 px-2 py-1.5 has-[>svg]:px-2 sm:h-9 sm:px-3 sm:py-2 sm:has-[>svg]:px-3 md:h-10 md:px-4 md:py-2.5 md:has-[>svg]:px-4 lg:h-11 lg:px-5 lg:py-3 lg:has-[>svg]:px-5",
        sm: "h-7 rounded-md gap-1 px-2 py-1 has-[>svg]:px-2 sm:h-8 sm:px-2.5 sm:py-1.5 md:h-9 md:px-3 md:py-2",
        lg: "h-9 rounded-md px-4 py-2 has-[>svg]:px-4 sm:h-10 sm:px-5 sm:py-2.5 md:h-11 md:px-6 md:py-3 lg:h-12 lg:px-7 lg:py-3.5",
        icon: "size-8 sm:size-9 md:size-10 lg:size-11",
        "icon-sm": "size-5 sm:size-6 md:size-7",
        "icon-lg": "size-9 sm:size-10 md:size-11 lg:size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
