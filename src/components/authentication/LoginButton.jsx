import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = useCallback(

    async () => {
      loginWithRedirect();
    },
    [loginWithRedirect],
  );

  return (
    <button
      type="button"
      className="btn btn-primary bg-orange-500 text-white rounded py-0.5 px-0.5"
      onClick={handleLogin}
    >
      Log In
    </button>
  );
}

export default LoginButton;
