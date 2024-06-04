import { Link } from "react-router-dom";

/**
 * NavBar
 * props:
 * links - [str,...]
 */
function Nav({ links }) {
  return (
    <ul className="Nav">
      <li>
        <Link to="/dogs">Doggos</Link>
      </li>
      {links.map((link) => (
        <li key={link}>
          <Link to={`/dogs/${link}`}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
