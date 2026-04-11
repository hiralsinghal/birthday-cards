import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-[#535C91] h-14">
            <Link to="/" className="px-4 py-4 hover:bg-[#1b1a55]">Home</Link>

            <ul className="flex list-none p-0 m-0">
                <li><Link to="/birthday-facts" className="block px-4 py-4 hover:bg-[#1B1A55]">Facts</Link></li>
                <li><Link to="/countdown" className="block px-4 py-4 hover:bg-[#1b1a55]">Countdown</Link></li>
                <li><Link to="/gift-ideas" className="block px-4 py-4 hover:bg-[#1b1a55]">Gift Ideas</Link></li>
            </ul>
            
        </nav>
    )
}