"use server"

import { AuthError } from 'next-auth';
import { SignInOptions } from 'next-auth/react';

import { signIn } from '../../auth';

export async function authenticate(
    formData: SignInOptions,
  ) {
    try {
      await signIn('credentials', formData);  
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }
