export const metadata = {
  title: "FAQ – Super Shop",
};

const faqs: { question: string; answer: string }[] = [
  {
    question: "Wie lange dauert die Lieferung?",
    answer:
      "Standardlieferungen innerhalb der Schweiz dauern 2–4 Werktage. Express-Lieferungen sind in 1–2 Werktagen verfügbar und können beim Checkout ausgewählt werden.",
  },
  {
    question: "Kann ich meine Bestellung zurückgeben?",
    answer:
      "Ja, du hast 30 Tage nach Erhalt der Ware Zeit, Artikel zurückzusenden. Die Artikel müssen ungetragen, ungewaschen und mit allen Etiketten versehen sein. Weitere Informationen findest du auf unserer Rückgabe-Seite.",
  },
  {
    question: "Welche Zahlungsmethoden akzeptiert ihr?",
    answer:
      "Wir akzeptieren Kreditkarten (Visa, Mastercard, American Express), TWINT, PayPal sowie Zahlung auf Rechnung (für registrierte Kunden).",
  },
  {
    question: "Wie finde ich meine richtige Grösse?",
    answer:
      "Auf jeder Produktseite findest du eine Grössentabelle mit genauen Massangaben. Im Zweifelsfall empfehlen wir, eine Grösse grösser zu wählen, da unsere Artikel tendenziell etwas kleiner ausfallen.",
  },
  {
    question: "Kann ich eine Bestellung stornieren?",
    answer:
      "Bestellungen können bis zu 1 Stunde nach Aufgabe storniert werden. Danach ist eine Stornierung nicht mehr möglich – du kannst die Ware jedoch nach Erhalt zurücksenden.",
  },
  {
    question: "Liefert ihr auch ins Ausland?",
    answer:
      "Ja, wir liefern in alle EU-Länder sowie nach Deutschland, Österreich und Liechtenstein. Internationale Lieferzeiten betragen 5–10 Werktage.",
  },
  {
    question: "Wie kann ich den Status meiner Bestellung verfolgen?",
    answer:
      "Nach dem Versand erhältst du eine E-Mail mit einem Tracking-Link. Du kannst den Status deiner Bestellung auch jederzeit in deinem Kundenkonto einsehen.",
  },
  {
    question: "Sind meine Zahlungsdaten sicher?",
    answer:
      "Ja. Alle Zahlungen werden über verschlüsselte SSL-Verbindungen abgewickelt. Wir speichern keine Kreditkartendaten auf unseren Servern.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 py-14">
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight">FAQ</h1>
      <p className="mb-10 text-sm text-gray-500">
        Antworten auf die häufigsten Fragen rund um Bestellung, Lieferung und Rückgabe.
      </p>

      <dl className="divide-y divide-gray-200">
        {faqs.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <dt className="text-sm font-bold text-black">{question}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-gray-600">{answer}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600">
        <p className="font-semibold text-black">Noch Fragen?</p>
        <p className="mt-1">
          Unser Kundenservice hilft dir gerne weiter.{" "}
          <a href="/contact" className="underline underline-offset-2 hover:text-black transition">
            Jetzt Kontakt aufnehmen →
          </a>
        </p>
      </div>
    </div>
  );
}
