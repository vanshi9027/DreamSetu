import logo from "../../assets/dreamsetu-logo.png";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Logo */}
        <div>

          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="DreamSetu Logo"
              className="h-12 w-12 object-contain"
            />

            <h2 className="text-2xl font-bold">
              DreamSetu
            </h2>

          </div>

          <p className="mt-5 leading-7 text-slate-300">
            Bridge Your Dreams to Reality.
            Learn, build, collaborate, and grow with AI-powered mentorship.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="mb-5 text-lg font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-slate-300">

            <li className="cursor-pointer hover:text-white">
              Features
            </li>

            <li className="cursor-pointer hover:text-white">
              How It Works
            </li>

            <li className="cursor-pointer hover:text-white">
              About
            </li>

            <li className="cursor-pointer hover:text-white">
              Contact
            </li>

          </ul>

        </div>

        {/* Resources */}

        <div>

          <h3 className="mb-5 text-lg font-semibold">
            Resources
          </h3>

          <ul className="space-y-3 text-slate-300">

            <li className="cursor-pointer hover:text-white">
              GitHub
            </li>

            <li className="cursor-pointer hover:text-white">
              LinkedIn
            </li>

            <li className="cursor-pointer hover:text-white">
              Documentation
            </li>

            <li className="cursor-pointer hover:text-white">
              Privacy Policy
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="mb-5 text-lg font-semibold">
            Contact
          </h3>

          <div className="space-y-4 text-slate-300">

            <p>📧 hello@dreamsetu.in</p>

            <p>📍 India</p>

            <p>🌐 www.dreamsetu.in</p>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-700">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row">

          <p>
            © 2026 DreamSetu. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <span className="cursor-pointer hover:text-white">
              Terms
            </span>

            <span className="cursor-pointer hover:text-white">
              Privacy
            </span>

            <span className="cursor-pointer hover:text-white">
              Cookies
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;