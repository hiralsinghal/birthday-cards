import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/birthday-facts">Facts</Link>
            <Link to="/countdown">Countdown</Link>
            <Link to="/gift-ideas">Gift Ideas</Link>
        </nav>
    )
}