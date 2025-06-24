import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <Link to='/Home'>Home</Link>
            <Link to='/Profile'>Profile</Link>
        </nav>
    )
}