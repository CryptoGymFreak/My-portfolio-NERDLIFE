import {Link} from "react-router-dom"

function Nav() {

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div>
                <h1 className="text-white text-lg font-bold">Jamie Guminy</h1>
            </div>
            <div className="flex space-x-4">
                <Link to="/about" className="text-white">About</Link>
                <Link to="/work" className="text-white">Work</Link>
                <Link to="/contact" className="text-white">Contact</Link>
            </div>
            </div>
        </nav>
    )
}

export default Nav