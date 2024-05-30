import { useId } from 'react';

import { cn } from '@/lib/utils';

interface DotPatternProps {
  // #region Properties (8)

  className?: string;
  cr?: any;
  cx?: any;
  cy?: any;
  height?: any;
  width?: any;
  x?: any;
  y?: any;

  // #endregion Properties (8)

  // #region Public Indexers (1)

  [key: string]: any;

  // #endregion Public Indexers (1)
}
export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cy} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

export default DotPattern;
