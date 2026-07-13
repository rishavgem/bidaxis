export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">


        {/* Company */}

        <div>

          <h2 className="text-2xl font-bold text-blue-400">
            BidAxis
          </h2>

          <p className="mt-5 leading-7 text-slate-300">
            Professional GeM and Government Tender Consultancy helping
            businesses participate and grow through procurement opportunities.
          </p>

        </div>


        {/* Quick Links */}

        <div>

          <h3 className="text-lg font-bold">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3 text-slate-300">

            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>

            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>

          </ul>

        </div>


        {/* Services */}

        <div>

          <h3 className="text-lg font-bold">
            Services
          </h3>

          <ul className="mt-5 space-y-3 text-slate-300">

            <li>
              <a href="/services/gem-registration">
                GeM Registration
              </a>
            </li>

            <li>
              <a href="/services/tender-consultancy">
                Tender Consultancy
              </a>
            </li>

            <li>
              <a href="/services/bid-documentation">
                Bid Documentation
              </a>
            </li>

            <li>
              <a href="/services/reverse-auction">
                Reverse Auction
              </a>
            </li>

          </ul>

        </div>


        {/* Contact */}

        <div>

          <h3 className="text-lg font-bold">
            Contact
          </h3>


          <ul className="mt-5 space-y-3 text-slate-300">

            <li>
              📞 +91 XXXXX XXXXX
            </li>

            <li>
              ✉ info@bidaxis.com
            </li>

            <li>
              📍 India
            </li>

          </ul>

        </div>


      </div>


      {/* Bottom */}

      <div className="border-t border-slate-800 py-6 text-center text-slate-400">

        © {new Date().getFullYear()} BidAxis. All Rights Reserved.

      </div>


    </footer>
  );
}