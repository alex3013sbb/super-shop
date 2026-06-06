export const metadata = {
  title: "Datenschutz – Super Shop",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 py-14">
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight">
        Datenschutz
      </h1>
      <p className="mb-10 text-sm text-gray-500">Stand: Juni 2026</p>

      <div className="space-y-10 text-sm leading-relaxed text-gray-600">
        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            1. Verantwortliche Stelle
          </h2>
          <p>
            Verantwortlich für die Datenverarbeitung ist Super Shop GmbH, Bern,
            Schweiz. Bei Fragen zum Datenschutz erreichst du uns unter{" "}
            <a
              href="mailto:datenschutz@supershop.ch"
              className="underline underline-offset-2 hover:text-black transition"
            >
              datenschutz@supershop.ch
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            2. Erhobene Daten
          </h2>
          <p>Wir verarbeiten folgende Kategorien personenbezogener Daten:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Kontaktdaten (Name, E-Mail-Adresse, Telefonnummer)</li>
            <li>Lieferadresse und Rechnungsadresse</li>
            <li>
              Zahlungsinformationen (verschlüsselt, nicht dauerhaft gespeichert)
            </li>
            <li>Bestellhistorie und Präferenzen</li>
            <li>Technische Daten (IP-Adresse, Browser-Typ, Besuchszeiten)</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            3. Zweck der Datenverarbeitung
          </h2>
          <p>
            Deine Daten werden ausschliesslich für folgende Zwecke verwendet:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Abwicklung und Lieferung von Bestellungen</li>
            <li>Kundenkommunikation und Support</li>
            <li>Verbesserung unseres Angebots</li>
            <li>Gesetzliche Pflichten (z. B. Buchführung)</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            4. Datenweitergabe
          </h2>
          <p>
            Deine Daten werden nicht ohne deine ausdrückliche Zustimmung an
            Dritte weitergegeben, ausser an Dienstleister, die für die
            Bestellabwicklung notwendig sind (z. B. Versandpartner,
            Zahlungsabwickler). Alle Partner sind vertraglich zur Einhaltung des
            Datenschutzes verpflichtet.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            5. Datensicherheit
          </h2>
          <p>
            Wir verwenden SSL-Verschlüsselung für alle Datenübertragungen.
            Unsere Server befinden sich in der Schweiz und sind nach aktuellen
            Sicherheitsstandards geschützt.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            6. Deine Rechte
          </h2>
          <p>Du hast das Recht auf:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Auskunft über deine gespeicherten Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung deiner Daten (Recht auf Vergessenwerden)</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen die Verarbeitung</li>
          </ul>
          <p className="mt-2">
            Zur Ausübung deiner Rechte wende dich an{" "}
            <a
              href="mailto:datenschutz@supershop.ch"
              className="underline underline-offset-2 hover:text-black transition"
            >
              datenschutz@supershop.ch
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            7. Cookies
          </h2>
          <p>
            Informationen zum Einsatz von Cookies findest du in unserer{" "}
            <a
              href="/cookies"
              className="underline underline-offset-2 hover:text-black transition"
            >
              Cookie-Richtlinie
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            8. Anwendbares Recht
          </h2>
          <p>
            Diese Datenschutzerklärung richtet sich nach dem Schweizer
            Datenschutzgesetz (revDSG) sowie der EU-Datenschutz-Grundverordnung
            (DSGVO), soweit anwendbar.
          </p>
        </section>
      </div>
    </div>
  );
}
