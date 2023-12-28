import { useDispatch } from "react-redux";
import authService from "../../AppWrite/Authentication";
import { logout } from "../../Store/AuthSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="inline-back px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
