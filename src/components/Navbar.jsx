import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <h3>Dogs Vs Cats</h3>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/cat">
          <li>Cat Pictures</li>
        </NavLink>
        <NavLink to="/dog">
          <li>Dog Pictures</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
