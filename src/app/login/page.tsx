import { GetUsers } from '@/lib/users';

// #region Functions (1)

export default async function Login() {
  const users = await GetUsers()
  console.log(users)
  return "Login"
}

// #endregion Functions (1)
