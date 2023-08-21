import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import useCookie from '@/hooks/useCookie';

const Everything = () => {
  const router = useRouter();
  const checkJwt = useCookie();

  useEffect(() => {
    const getCookies = Cookies.get('jwt')
    if (!getCookies) {
      router.push('/');
    }
  }, [router]);

  return <div>Everything</div>;
};

export default Everything;
