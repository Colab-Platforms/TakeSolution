import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="">
        <Link to="/">HOME</Link>
      </li>

      <li>
        <Link to="/investor" onClick={() => setMobileToggle(false)}>
          INVESTOR
        </Link>
      </li>

      <li>
        <Link>
          ABOUT US
        </Link>
      </li>

      {/* <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
          ABOUT US
        </Link>
      </li> */}

      {/* <li className="">
        <Link to="/newsroom" onClick={() => setMobileToggle(false)}>
          Newsroom
        </Link>

      </li> */}

    </ul>
  );
}
