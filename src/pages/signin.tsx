import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { AuthContext, useAuth } from '@/provider/AuthProvider';

const SignInSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
  password: z.string().min(6, { message: 'Can not be empty' }),
});
type Inputs = {
  email: string;
  password: string;
};
function SignIn() {
  const { user, isAuthLoading } = useContext(AuthContext);
  const { logIn } = useAuth();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(SignInSchema),
  });
  const [alert, setAlert] = useState('');

  const onSubmit: SubmitHandler<Inputs> = (data) => logIn(data, setAlert);

  useEffect(() => {
    if (!user && !isAuthLoading) {
      router.push('/signin');
    }
    if (user) {
      router.push('/');
    }
  }, [user, isAuthLoading]);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} />
        <input {...register('password')} />
        <input type='submit' />
      </form>
      {alert}
    </>
  );
}

export default SignIn;
