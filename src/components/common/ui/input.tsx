import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'text-base file:text-sm md:text-sm flex h-9 w-full rounded-md border-[1px] bg-transparent px-3 py-1 shadow-sm transition-colors',
          'file:border-0 file:bg-transparent file:font-medium file:text-foreground',
          'placeholder:text-muted-foreground',
          'focus:border-[1px] focus:border-main focus:outline-none',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'border-input [&:not(:placeholder-shown)]:border-main',
          'disabled:[&:not(:placeholder-shown)]:border-main',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
