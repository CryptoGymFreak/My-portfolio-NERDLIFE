function Nav() {

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div>
                <h1 className="text-white text-lg font-bold">Jamie Guminy</h1>
            </div>
            <div className="flex space-x-4">
                <a href="/about" className="text-white">About</a>
                <a href="/work" className="text-white">Work</a>
                <a href="/contact" className="text-white">Contact</a>
            </div>
            </div>
        </nav>
    )
}

export default Nav