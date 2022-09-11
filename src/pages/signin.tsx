import { zodResolver } from '@hookform/resolvers/zod';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { z } from 'zod';

import { Button } from '@/components/atoms/Button/Button';
import { Alert } from '@/components/molecules/Alert/Alert';
import LabeledInput from '@/components/molecules/LabeledInput/LabeledInput';
import { AuthContext, useAuth } from '@/provider/AuthProvider';

export const LoginWrapper = styled(motion.div)`
  padding: 2rem;
  width: 100%;
  max-width: 28rem;
  place-self: center;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.neutral[50]};

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
  }
`;

const SignInSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
  password: z.string().min(6, { message: 'Can not be empty' }),
});
type Inputs = {
  email: string;
  password: string;
};
const loginVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    transition: {
      ease: 'easeInOut',
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
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
      <LoginWrapper variants={loginVariants} initial='hidden' animate='visible'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LabeledInput
            {...register('email')}
            label='Email'
            autoComplete='email'
            error={errors.email?.message}
            aria-invalid={errors.email ? 'true' : 'false'}
          ></LabeledInput>
          <LabeledInput
            {...register('password')}
            type='password'
            label='Password'
            autoComplete='password'
            error={errors.password?.message}
            aria-invalid={errors.password ? 'true' : 'false'}
          ></LabeledInput>
          <Button type='submit' variant='primary'>
            Log in
          </Button>
          {alert.length ? <Alert variant='danger'>{alert}</Alert> : null}
          <Alert variant='warning'>
            <p>Try these credentials</p>
            <p>Email: test@test.com</p>
            <p>Password: testtest</p>
          </Alert>
        </form>
      </LoginWrapper>
    </>
  );
}

export default SignIn;
