export const metadata = {
  title: "Versand & Lieferung – Super Shop",
};

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 py-14">
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight">
        Versand &amp; Lieferung
      </h1>
      <p className="mb-10 text-sm text-gray-500">
        Alle Infos zu Lieferzeiten, Kosten und Versandpartnern.
      </p>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-wide">Lieferoptionen</h2>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-black">Option</th>
                <th className="px-4 py-3 text-left font-semibold text-black">Lieferzeit</th>
                <th className="px-4 py-3 text-left font-semibold text-black">Kosten</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              <tr>
                <td className="px-4 py-3">Standardlieferung (CH)</td>
                <td className="px-4 py-3">2–4 Werktage</td>
                <td className="px-4 py-3">CHF 5.90</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Expresslieferung (CH)</td>
                <td className="px-4 py-3">1–2 Werktage</td>
                <td className="px-4 py-3">CHF 12.90</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Kostenloser Versand (CH)</td>
                <td className="px-4 py-3">2–4 Werktage</td>
                <td className="px-4 py-3">Ab CHF 80.–</td>
              </tr>
              <tr>
                <td className="px-4 py-3">EU / Deutschland / Österreich</td>
                <td className="px-4 py-3">5–8 Werktage</td>
                <td className="px-4 py-3">CHF 14.90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10 space-y-6 text-sm text-gray-600">
        <div>
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-black">
            Versandpartner
          </h2>
          <p>
            Wir versenden alle Bestellungen über die Schweizerische Post (A-Post / Priority).
            Nach dem Versand erhältst du automatisch eine E-Mail mit dem Tracking-Link.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-black">
            Bestellschluss
          </h2>
          <p>
            Bestellungen, die bis 12:00 Uhr eingehen, werden am selben Werktag bearbeitet und
            versendet. Bestellungen nach 12:00 Uhr werden am nächsten Werktag versendet.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-black">
            Lieferadresse ändern
          </h2>
          <p>
            Eine Adressänderung ist nur möglich, solange die Bestellung noch nicht versendet
            wurde. Bitte{" "}
            <a href="/contact" className="underline underline-offset-2 hover:text-black transition">
              kontaktiere uns
            </a>{" "}
            so schnell wie möglich.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-black">
            Paket nicht erhalten?
          </h2>
          <p>
            Falls dein Paket nach dem angegebenen Lieferdatum noch nicht angekommen ist, prüfe
            bitte zuerst den Tracking-Status. Bei anhaltenden Problemen wende dich an unseren{" "}
            <a href="/contact" className="underline underline-offset-2 hover:text-black transition">
              Kundenservice
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
