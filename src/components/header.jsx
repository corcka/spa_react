import { Link } from "react-router-dom";

function Header() {
    return   <nav className="yellow darken-2">
        <div className="container">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    Кушац ^~^
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/contact">Хто мы</Link>
                    </li>
                    <li>
                        <Link to="/about">Што мы</Link>
                    </li>
                </ul>
            </div>
        </div>
  </nav>
}
export { Header };