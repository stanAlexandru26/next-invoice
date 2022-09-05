import type { User } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

import { auth } from '@/firebase';
import { handleFirebaseAuthError } from '@/helpers/handleFirebaseAuthError';

interface AuthContextInterface {
  user: User | null;
  isAuthLoading: boolean;
  logIn: (
    data: {
      email: string;
      password: string;
    },
    onError: Function
  ) => void;
  logOut: () => void;
  signUp: (
    data: {
      email: string;
      password: string;
    },
    onError: Function
  ) => void;
}

export const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsAuthLoading(false);
    });
  }, []);

  const logIn = async (
    {
      email,
      password,
    }: {
      email?: string;
      password?: string;
    },
    onError: Function
  ) => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password).catch((error) => {
        const message = handleFirebaseAuthError(error.code);
        onError(message);
      });
    }
    if (!email && !password) {
      signInAnonymously(auth).catch((error) => {
        const message = handleFirebaseAuthError(error.code);
        onError(message);
      });
    }
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signUp = async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    onError: Function
  ) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          router.push('/invoice');
        }
      })
      .catch((error) => {
        const message = handleFirebaseAuthError(error.code);
        onError(message);
      });
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthLoading, logIn, logOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
