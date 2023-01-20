import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <button
      type="button"
      className="btn btn-danger bg-red-500 text-white rounded px-0.5 py-0.5 "
      onClick={() => logout({
        returnTo: window.location.origin,
      })}
    >
      Log Out
    </button>
  );
}

export default LogoutButton;
