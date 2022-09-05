import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { AuthContext, useAuth } from '@/provider/AuthProvider';

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};
const schema = z
  .object({
    email: z.string().email({ message: 'Please enter a valid email' }),
    password: z.string().min(6, { message: 'Can not be empty' }),
    confirmPassword: z.string().min(6, { message: 'Can not be empty' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const { user, isAuthLoading } = useContext(AuthContext);

  const { signUp } = useAuth();
  const [alert, setAlert] = useState('');
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => signUp(data, setAlert);
  useEffect(() => {
    if (user && !isAuthLoading) {
      router.push('/');
    }
  }, [user, isAuthLoading]);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} />
        <input {...register('password')} />
        <input {...register('confirmPassword')} />
        <input type='submit' />
      </form>
      {alert}
    </>
  );
}

export default SignUp;
