import logo from "../../assets/dreamsetu-logo.png";

const navItems = [
  "Features",
  "How It Works",
  "About",
  "Contact",
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            alt="DreamSetu Logo"
            className="h-12 w-12 object-contain"
          />

          <h1 className="text-2xl font-extrabold tracking-tight text-blue-600">
            DreamSetu
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer text-[15px] font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-5">
          <button className="hidden text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 md:block">
            Login
          </button>

          <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-blue-700 hover:shadow-lg">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;


