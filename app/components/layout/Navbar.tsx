export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <a
          href="/"
          className="text-2xl font-bold text-blue-700"
        >
          BidAxis
        </a>


        {/* Menu */}

        <ul className="hidden items-center gap-8 md:flex">

          <li>
            <a
              href="/"
              className="hover:text-blue-700"
            >
              Home
            </a>
          </li>


          <li className="group relative">

            <button className="hover:text-blue-700">
              Services ▾
            </button>


            <div className="absolute left-0 top-8 hidden w-64 rounded-xl bg-white p-4 shadow-xl group-hover:block">

              <a
                href="/services/gem-registration"
                className="block rounded-lg p-2 hover:bg-blue-50"
              >
                GeM Registration
              </a>


              <a
                href="/services/tender-consultancy"
                className="block rounded-lg p-2 hover:bg-blue-50"
              >
                Tender Consultancy
              </a>


              <a
                href="/services/bid-documentation"
                className="block rounded-lg p-2 hover:bg-blue-50"
              >
                Bid Documentation
              </a>


              <a
                href="/services/reverse-auction"
                className="block rounded-lg p-2 hover:bg-blue-50"
              >
                Reverse Auction
              </a>


              <a
                href="/services/vendor-assessment"
                className="block rounded-lg p-2 hover:bg-blue-50"
              >
                Vendor Assessment
              </a>

            </div>

          </li>


          <li>
            <a
              href="/about"
              className="hover:text-blue-700"
            >
              About
            </a>
          </li>


          <li>
            <a
              href="/services"
              className="hover:text-blue-700"
            >
              All Services
            </a>
          </li>


          <li>
            <a
              href="/contact"
              className="hover:text-blue-700"
            >
              Contact
            </a>
          </li>


        </ul>


        {/* Login */}

        <a
          href="/login"
          className="rounded-lg bg-blue-700 px-5 py-2 text-white hover:bg-blue-800"
        >
          Login
        </a>


      </nav>

    </header>
  );
}