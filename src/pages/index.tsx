import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { AuthContext } from '@/provider/AuthProvider';

const Index = () => {
  const { user, isAuthLoading } = useContext(AuthContext);
  console.log('🚀 ~ file: index.tsx ~ line 8 ~ Home ~ user', user);
  const router = useRouter();
  useEffect(() => {
    if (!user && !isAuthLoading) {
      router.push('/signin');
    }
    // if (user && !isAuthLoading) {
    //   router.push('/invoice');
    // }
  }, [user, isAuthLoading]);
  return <></>;
};

export default Index;
