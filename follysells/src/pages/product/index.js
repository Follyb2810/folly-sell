import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import useCookie from "@/hooks/useCookie";

const Product = () => {
  const router = useRouter();
  const checkJwt = useCookie();

  useEffect(() => {
    const getCookies = Cookies.get('jwt')
    if (!getCookies) {
      router.push('/');
    }
  }, [router]);

  return (
    <h1>Hello</h1>
  );
}

export default Product;