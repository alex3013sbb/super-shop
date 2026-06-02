import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

const linkClass = "hover:text-black transition";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-8 py-10">
        <div className="grid grid-cols-2 gap-8 text-xs md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold uppercase">Customer Service</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/contact" className={linkClass}>
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/faq" className={linkClass}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className={linkClass}>
                  Versand &amp; Lieferung
                </Link>
              </li>
              <li>
                <Link href="/returns" className={linkClass}>
                  Rückgabe &amp; Umtausch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold uppercase">About Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/about#unternehmen" className={linkClass}>
                  Unternehmen
                </Link>
              </li>
              <li>
                <Link href="/about#nachhaltigkeit" className={linkClass}>
                  Nachhaltigkeit
                </Link>
              </li>
              <li>
                <Link href="/about#karriere" className={linkClass}>
                  Karriere
                </Link>
              </li>
              <li>
                <Link href="/about#presse" className={linkClass}>
                  Presse
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold uppercase">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/terms" className={linkClass}>
                  AGB
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={linkClass}>
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/imprint" className={linkClass}>
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/cookies" className={linkClass}>
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold uppercase">Contact</h3>
            <div className="space-y-2 text-gray-600">
              <p>
                <a href="mailto:info@supershop.ch" className={linkClass}>
                  info@supershop.ch
                </a>
              </p>
              <p>+41 76 222 22 22</p>
              <p>Bern, Schweiz</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-5 text-gray-700">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={linkClass}
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={linkClass}
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className={linkClass}
          >
            <FaTiktok size={16} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className={linkClass}
          >
            <FaYoutube size={16} />
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Super Shop. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
