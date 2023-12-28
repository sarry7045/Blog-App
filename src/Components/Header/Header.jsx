import { Container, LogoutButton } from "../Index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const authStatus = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const Paths = [
    {
      name: "Home",
      url: "/",
      isActive: true,
    },
    {
      name: "Login",
      url: "/Login",
      isActive: !authStatus,
    },
    {
      name: "Signup",
      url: "/Signup",
      isActive: !authStatus,
    },
    {
      name: "All Post",
      url: "/all-post",
      isActive: authStatus,
    },

    {
      name: "Add Post",
      url: "/add-post",
      isActive: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container />
      <nav className="flex">
        <div className="mr-4">
          <Link to="/">Blog App</Link>
        </div>
        <ul className="flex ml-auto">
          {Paths?.map(
            (items) =>
              items?.isActive && (
                <li key={items?.name}>
                  <button
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                    onClick={() => navigate(items?.url)}
                  >
                    {items?.name}
                  </button>
                </li>
              )
          )}
          {authStatus && (
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
