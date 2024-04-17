import { Outlet, NavLink } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Outlet />
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-red-500" : undefined)}
        end
      >
        homePage
      </NavLink>
      <p>RootLayout</p>
    </>
  );
}
