export const metadata = {
  title: "Rückgabe & Umtausch – Super Shop",
};

export default function ReturnsPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 py-14">
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight">
        Rückgabe &amp; Umtausch
      </h1>
      <p className="mb-10 text-sm text-gray-500">
        Nicht das Richtige? Kein Problem — wir machen die Rückgabe so einfach wie möglich.
      </p>

      {/* Policy highlight */}
      <div className="mb-10 rounded-lg border border-black bg-black px-6 py-5 text-white">
        <p className="text-lg font-bold">30 Tage kostenlose Rückgabe</p>
        <p className="mt-1 text-sm text-gray-300">
          Für alle Bestellungen innerhalb der Schweiz — kein Aufwand, keine versteckten Kosten.
        </p>
      </div>

      {/* Steps */}
      <section className="mb-10">
        <h2 className="mb-5 text-sm font-bold uppercase tracking-wide">So funktioniert es</h2>
        <ol className="space-y-5">
          {[
            {
              step: "1",
              title: "Rückgabe anmelden",
              desc: 'Melde deine Rückgabe über unser Kontaktformular an. Gib deine Bestellnummer und die Artikel an, die du zurücksenden möchtest.',
            },
            {
              step: "2",
              title: "Artikel verpacken",
              desc: "Verpacke die Artikel sicher in der Originalverpackung (wenn möglich). Alle Etiketten müssen noch angebracht sein. Artikel müssen ungetragen und ungewaschen sein.",
            },
            {
              step: "3",
              title: "Rücksendeetikett drucken",
              desc: "Du erhältst per E-Mail ein kostenloses Rücksendeetikett der Schweizerischen Post. Drucke es aus und klebe es auf das Paket.",
            },
            {
              step: "4",
              title: "Paket aufgeben",
              desc: "Gib das Paket an einer Poststelle oder einem Paketautomaten ab. Nach Eingang des Rückpakets wird die Rückerstattung innerhalb von 5–7 Werktagen bearbeitet.",
            },
          ].map(({ step, title, desc }) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black text-xs font-bold">
                {step}
              </span>
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Conditions */}
      <section className="mb-10 space-y-4 text-sm text-gray-600">
        <h2 className="text-sm font-bold uppercase tracking-wide text-black">
          Rückgabebedingungen
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Rückgabe innerhalb von 30 Tagen nach Erhalt der Ware</li>
          <li>Artikel müssen ungetragen, ungewaschen und unverändert sein</li>
          <li>Alle Original-Etiketten müssen noch angebracht sein</li>
          <li>Unterwäsche und Bademode können aus hygienischen Gründen nicht zurückgegeben werden</li>
          <li>Sale-Artikel (mehr als 50 % Rabatt) sind vom Umtausch ausgeschlossen</li>
        </ul>
      </section>

      {/* Refund info */}
      <section className="mb-10 text-sm text-gray-600">
        <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-black">
          Rückerstattung
        </h2>
        <p>
          Die Rückerstattung erfolgt auf die ursprüngliche Zahlungsmethode innerhalb von 5–7
          Werktagen nach Eingang der Rücksendung. Bei Zahlung per Kreditkarte kann es je nach
          Bank 1–2 zusätzliche Werktage dauern.
        </p>
      </section>

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600">
        <p className="font-semibold text-black">Fragen zur Rückgabe?</p>
        <p className="mt-1">
          Unser Team hilft dir gerne weiter.{" "}
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
