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
          'w-full h-8 text-sm flex items-center justify-center rounded-lg bg-white bg-opacity-10 transition-colors hover:bg-opacity-15',
          className,
        )}
      >
      {children}
      </button>
  );
      }

// #endregion Functions (1)
