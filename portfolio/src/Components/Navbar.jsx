import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <header className="flex justify-between items-center mt-5 z-10 ">
            <img src={logo} alt="logo-image" className="w-16" />

            <div className="flex gap-5 text-white">
                <a
                    href="#"
                    className=" text-white hover:text-gray-500 transition-colors duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 hover:scale-110 transition-transform duration-300"
                    >
                        <path d="M13.68 10.62 20.24 3h-1.55L13 9.62 8.45 3H3.19l6.88 10.01L3.19 21h1.55l6.01-6.99 4.8 6.99h5.24l-7.13-10.38Zm-2.13 2.47-.7-1-5.54-7.93H7.7l4.47 6.4.7 1 5.82 8.32H16.3z"></path>
                    </svg>
                </a>

                <a
                    href="#"
                    className=" text-white hover:text-gray-500 transition-colors duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 hover:scale-110 transition-transform duration-300"
                    >
                        <path d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376 2.188 2.188 0 1 0 0-4.376M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"></path>
                    </svg>
                </a>

                <a
                    href="#"
                    className=" text-white hover:text-gray-500 transition-colors duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 hover:scale-110 transition-transform duration-300"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </a>
            </div>
        </header>
    );
};

export default Navbar;
