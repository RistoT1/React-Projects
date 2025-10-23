const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
            <div className="text-xl font-bold">
                MyWebsite
            </div>
            <ul className="flex space-x-6">
                <li>
                    <a href="/" className="hover:text-gray-300 transition-colors duration-200">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/login" className="hover:text-gray-300 transition-colors duration-200">
                        Kirjaudu
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
