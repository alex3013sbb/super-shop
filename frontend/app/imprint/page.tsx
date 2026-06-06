export const metadata = {
  title: "Impressum – Super Shop",
};

export default function ImprintPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 py-14">
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight">
        Impressum
      </h1>
      <p className="mb-10 text-sm text-gray-500">
        Angaben gemäss Art. 3 UWG (Schweiz)
      </p>

      <div className="space-y-8 text-sm leading-relaxed text-gray-600">
        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            Unternehmensangaben
          </h2>
          <p>Super Shop GmbH</p>
          <p>Musterstrasse 12</p>
          <p>3011 Bern</p>
          <p>Schweiz</p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            Kontakt
          </h2>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:info@supershop.ch"
              className="underline underline-offset-2 hover:text-black transition"
            >
              info@supershop.ch
            </a>
          </p>
          <p>Telefon: +41 76 222 22 22</p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            Handelsregistereintrag
          </h2>
          <p>Eingetragen im Handelsregister des Kantons Bern</p>
          <p>UID: CHE-123.456.789</p>
          <p>MWST-Nr.: CHE-123.456.789 MWST</p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            Geschäftsführung
          </h2>
          <p>Alex Kolomiiets, Geschäftsführer</p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            Haftungsausschluss
          </h2>
          <p>
            Super Shop GmbH übernimmt keine Haftung für die Richtigkeit,
            Vollständigkeit und Aktualität der auf dieser Website
            bereitgestellten Informationen. Verweise und Links auf externe
            Websites liegen ausserhalb unseres Verantwortungsbereichs.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            Urheberrecht
          </h2>
          <p>
            Alle Inhalte dieser Website (Texte, Bilder, Grafiken, Logos) sind
            urheberrechtlich geschützt. Eine Verwendung ohne ausdrückliche
            schriftliche Genehmigung ist nicht gestattet.
          </p>
        </section>
      </div>
    </div>
  );
}
