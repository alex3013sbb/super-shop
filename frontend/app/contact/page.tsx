import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Kontakt – Super Shop",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-8 py-14">
      <h1 className="mb-12 text-3xl font-black uppercase tracking-tight">
        Kontakt
      </h1>

      <div className="grid gap-16 lg:grid-cols-2">
        {/* ── Left: contact info ── */}
        <div>
          <h2 className="mb-3 text-base font-bold uppercase tracking-wide">
            Wir sind für dich da
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-gray-600">
            Hast du Fragen oder brauchst Hilfe?
            <br />
            Unser Kundenservice ist gerne für dich da.
          </p>

          <dl className="space-y-6 text-sm">
            <div className="flex items-start gap-3">
              <Mail
                size={16}
                strokeWidth={1.7}
                className="mt-0.5 shrink-0 text-gray-500"
              />
              <div>
                <dt className="font-bold">E-Mail</dt>
                <dd className="mt-0.5 text-gray-600">
                  <a
                    href="mailto:info@supershop.ch"
                    className="hover:underline"
                  >
                    info@supershop.ch
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone
                size={16}
                strokeWidth={1.7}
                className="mt-0.5 shrink-0 text-gray-500"
              />
              <div>
                <dt className="font-bold">Telefon</dt>
                <dd className="mt-0.5 text-gray-600">+41 76 222 22 22</dd>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin
                size={16}
                strokeWidth={1.7}
                className="mt-0.5 shrink-0 text-gray-500"
              />
              <div>
                <dt className="font-bold">Adresse</dt>
                <dd className="mt-0.5 text-gray-600 leading-relaxed">
                  Super Shop GmbH
                  <br />
                  Musterstrasse 12
                  <br />
                  3011 Bern
                  <br />
                  Schweiz
                </dd>
              </div>
            </div>
          </dl>
        </div>

        {/* ── Right: form ── */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
