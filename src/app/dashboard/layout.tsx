import AuthContext from "./AuthContext";

// #region Interfaces (1)

export interface AccountLayoutProps {
  // #region Properties (1)

  children: React.ReactNode;

  // #endregion Properties (1)
}

// #endregion Interfaces (1)

// #region Functions (1)

export default function AccountLayout({ children }: AccountLayoutProps) {
  return <AuthContext>{children}</AuthContext>;
}

// #endregion Functions (1)
