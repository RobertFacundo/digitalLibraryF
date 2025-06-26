import { Link } from "react-router-dom";
import './NavBar.scss'

export const NavBar = () => {
    return (
        <nav className="nav-bar">
            <Link to='/Home'>Home</Link>
            <Link to='/Profile'>Profile</Link>
        </nav>
    )
}