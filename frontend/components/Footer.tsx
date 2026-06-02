import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-8 py-10">
        <div className="grid grid-cols-2 gap-8 text-xs md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold uppercase">
              Kundendienst
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>Kontakt</li>
              <li>FAQ</li>
              <li>Versand & Lieferung</li>
              <li>Rückgabe & Umtausch</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold uppercase">
              Über uns
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>Unternehmen</li>
              <li>Nachhaltigkeit</li>
              <li>Karriere</li>
              <li>Presse</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold uppercase">
              Rechtliches
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>AGB</li>
              <li>Datenschutz</li>
              <li>Impressum</li>
              <li>Cookies</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold uppercase">
              Kontakt
            </h3>

            <div className="space-y-2 text-gray-600">
              <p>info@supershop.ch</p>
              <p>+41 76 222 22 22</p>
              <p>Bern, Schweiz</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-5 text-gray-700">
          <FaInstagram size={16} />
          <FaFacebookF size={16} />
          <FaTiktok size={16} />
          <FaYoutube size={16} />
        </div>
      </div>
    </footer>
  );
}