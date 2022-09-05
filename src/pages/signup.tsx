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
const RedLink = styled.a`
  color: #cf2323;
`;
type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
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
      <LoginWrapper variants={loginVariants} initial='hidden' animate='visible'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LabeledInput
            {...register('email')}
            label='Email Address'
            error={errors.email?.message}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          <LabeledInput
            {...register('password')}
            type='password'
            label='Password'
            error={errors.password?.message}
            aria-invalid={errors.password ? 'true' : 'false'}
          />
          <LabeledInput
            {...register('confirmPassword')}
            type='password'
            label='Confirm Password'
            error={errors.confirmPassword?.message}
            aria-invalid={errors.confirmPassword ? 'true' : 'false'}
          />
          <Button type='submit' variant='primary'>
            Register
          </Button>
          {alert.length ? <Alert variant='danger'>{alert}</Alert> : null}
          <Alert variant='warning'>
            <p>Already have an account?</p>
            <RedLink href='/signin'>Log In</RedLink>
          </Alert>
        </form>
      </LoginWrapper>
    </>
  );
}

export default SignUp;
