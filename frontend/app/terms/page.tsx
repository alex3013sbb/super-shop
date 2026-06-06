export const metadata = {
  title: "AGB – Super Shop",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 py-14">
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight">
        Allgemeine Geschäftsbedingungen
      </h1>
      <p className="mb-10 text-sm text-gray-500">Stand: Juni 2026</p>

      <div className="space-y-10 text-sm leading-relaxed text-gray-600">
        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            1. Geltungsbereich
          </h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
            Bestellungen, die über den Online-Shop von Super Shop GmbH, Bern,
            Schweiz, aufgegeben werden. Mit Abschluss einer Bestellung
            akzeptiert der Kunde diese AGB in der jeweils gültigen Fassung.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            2. Vertragsschluss
          </h2>
          <p>
            Die Darstellung der Produkte im Online-Shop stellt kein rechtlich
            bindendes Angebot dar. Erst mit dem Absenden der Bestellung gibt der
            Kunde ein verbindliches Angebot ab. Die Auftragsbestätigung per
            E-Mail stellt die Annahme des Angebots dar und begründet den
            Kaufvertrag.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            3. Preise und Zahlungsbedingungen
          </h2>
          <p>
            Alle Preise verstehen sich inklusive der gesetzlichen
            Mehrwertsteuer. Versandkosten werden separat ausgewiesen. Die
            Zahlung erfolgt per Kreditkarte, TWINT, PayPal oder Rechnung. Bei
            Zahlung auf Rechnung ist der Betrag innerhalb von 14 Tagen nach
            Rechnungsdatum zu begleichen.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            4. Lieferung
          </h2>
          <p>
            Lieferungen erfolgen ausschliesslich in die Schweiz und ausgewählte
            EU-Länder. Die Lieferzeiten sind auf unserer{" "}
            <a
              href="/shipping"
              className="underline underline-offset-2 hover:text-black transition"
            >
              Versandseite
            </a>{" "}
            aufgeführt. Das Versandrisiko liegt ab Übergabe an den
            Versanddienstleister beim Kunden.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            5. Widerrufsrecht & Rückgabe
          </h2>
          <p>
            Konsumenten haben das Recht, die Bestellung innerhalb von 30 Tagen
            ohne Angabe von Gründen zu widerrufen. Die Rücksendekosten trägt
            Super Shop. Weitere Informationen findest du auf unserer{" "}
            <a
              href="/returns"
              className="underline underline-offset-2 hover:text-black transition"
            >
              Rückgabeseite
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            6. Gewährleistung
          </h2>
          <p>
            Es gelten die gesetzlichen Gewährleistungsrechte. Bei Mängeln der
            gelieferten Ware hat der Kunde das Recht auf Nacherfüllung,
            Rücktritt oder Minderung des Kaufpreises.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            7. Haftungsbeschränkung
          </h2>
          <p>
            Super Shop haftet nicht für Schäden, die durch höhere Gewalt,
            technische Störungen oder durch das Verhalten Dritter verursacht
            werden, soweit dies gesetzlich zulässig ist.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            8. Anwendbares Recht & Gerichtsstand
          </h2>
          <p>
            Es gilt ausschliesslich Schweizer Recht unter Ausschluss des
            UN-Kaufrechts. Gerichtsstand ist Bern, Schweiz.
          </p>
        </section>
      </div>

      <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600">
        <p className="font-semibold text-black">Fragen zu unseren AGB?</p>
        <p className="mt-1">
          <a
            href="/contact"
            className="underline underline-offset-2 hover:text-black transition"
          >
            Jetzt Kontakt aufnehmen →
          </a>
        </p>
      </div>
    </div>
  );
}
