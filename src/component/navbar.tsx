const navbar = ({ setPage }: { setPage: (page: string) => void }) => {
  return (
    <nav className="bg-gradient-to-r from-purple-800 to-indigo-900 shadow-lg">
      

          <ul className="flex items-center space-x-6">
            <li
              onClick={() => setPage("home")}
              className="text-indigo-100 hover:text-white transition-colors duration-200 font-medium cursor-pointer underline decoration-2 decoration-transparent hover:decoration-indigo-400 py-1">
              Home
            </li>
            <li
              onClick={() => setPage("about")}
              className="text-indigo-100 hover:text-white transition-colors duration-200 font-medium cursor-pointer underline decoration-2 decoration-transparent hover:decoration-indigo-400 py-1">
              About
            </li>
            <li
              onClick={() => setPage("contact")}
              className="text-indigo-100 hover:text-white transition-colors duration-200 font-medium cursor-pointer underline decoration-2 decoration-transparent hover:decoration-indigo-400 py-1">
              Contact
            </li>
            <li>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm font-medium transition duration-200 ml-2"
                onClick={() => setPage("signup")}>
                Sign Up
              </button>
            </li>
            <li
            onClick={() => setPage("HooksPage")}
              className="text-indigo-100 hover:text-white transition-colors duration-200 font-medium cursor-pointer underline decoration-2 decoration-transparent hover:decoration-indigo-400 py-1">
              HooksPage
            </li>
          </ul>
    </nav>
  );
};

export default navbar;
