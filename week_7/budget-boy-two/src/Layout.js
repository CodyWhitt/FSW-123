import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/Transactions">Transactions </Link>
        <Link to="/Profile">Profile</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;