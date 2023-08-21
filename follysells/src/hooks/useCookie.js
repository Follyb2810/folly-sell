import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const useCookie = () => {
  const [checkJwt, setCheckJwt] = useState(false);

  useEffect(() => {
    const jwtCookie = Cookies.get('jwt'); // Use a variable to get the JWT cookie
    setCheckJwt(!!jwtCookie); // Update the state based on the JWT cookie
  }, []);

  return checkJwt; // Return the boolean value indicating presence of cookie
};

export default useCookie;
