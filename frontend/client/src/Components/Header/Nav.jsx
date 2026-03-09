import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="cs_mobile_menu_close">
        <button
          className="cs_close_btn"
          onClick={() => setMobileToggle(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </li>
      <li className="">
        <Link to="/">HOME</Link>
      </li>

      <li>
        <Link to="/investor" onClick={() => setMobileToggle(false)}>
          INVESTOR
        </Link>
      </li>

      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
          ABOUT US
        </Link>
      </li>

      {/* <li className="">
        <Link to="/newsroom" onClick={() => setMobileToggle(false)}>
          Newsroom
        </Link>

      </li> */}

    </ul>
  );
}



