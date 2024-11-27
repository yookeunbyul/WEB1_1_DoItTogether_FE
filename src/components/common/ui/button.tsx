import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        full: 'bg-black01 text-primary-foreground text-white02 shadow hover:bg-primary/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground text-black01',
        secondary:
          'bg-gray03 text-secondary-foreground shadow-sm hover:bg-secondary/80 text-white02',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        select: 'border border-input bg-background shadow-sm  text-black01 px-3 py-4 rounded-2xl',
      },
      size: {
        small: 'h-16 max-w-[89px] rounded-2xl px-8 py-4 mb-6',
        medium: 'h-16 max-w-[250px] rounded-2xl px-24 py-4 mb-6',
        large: 'h-16 w-full rounded-2xl mb-6',
        full: 'w-full',
        tight: 'h-auto',
      },
    },
    defaultVariants: {
      variant: 'full',
      size: 'small',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
