import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-[#88B6EB] h-14">
            <Link to="/" className="px-4 py-4 text-black hover:bg-[#3b8deb]">Home</Link>

            <ul className="flex list-none p-0 m-0">
                <li><Link to="/birthday-facts" className="block px-4 py-4 hover:bg-[#88B6EB] text-black">Facts</Link></li>
                <li><Link to="/countdown" className="block px-4 py-4 text-black hover:bg-[#88B6EB]">Countdown</Link></li>
                <li><Link to="/gift-ideas" className="block px-4 py-4 text-black hover:bg-[#88B6EB]">Gift Ideas</Link></li>
            </ul>
            
        </nav>
    )
}