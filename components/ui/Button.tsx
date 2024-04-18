import clsx from 'clsx';

// #region Interfaces (1)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // #region Properties (1)

  children: React.ReactNode;

  // #endregion Properties (1)
}

// #endregion Interfaces (1)

// #region Functions (1)

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
      }

// #endregion Functions (1)
