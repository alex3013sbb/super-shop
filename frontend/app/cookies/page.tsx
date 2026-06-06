export const metadata = {
  title: "Cookies – Super Shop",
};

const cookieTypes: {
  name: string;
  purpose: string;
  duration: string;
  required: boolean;
}[] = [
  {
    name: "Session-Cookie",
    purpose: "Aufrechterhaltung der Benutzersitzung während des Einkaufs",
    duration: "Sitzungsende",
    required: true,
  },
  {
    name: "Warenkorb",
    purpose: "Speicherung der Artikel im Warenkorb",
    duration: "30 Tage",
    required: true,
  },
  {
    name: "Favoriten",
    purpose: "Speicherung deiner Favoritenliste im Browser (localStorage)",
    duration: "Dauerhaft (lokal)",
    required: true,
  },
  {
    name: "Analyse-Cookies",
    purpose: "Anonymisierte Nutzungsstatistiken zur Verbesserung des Shops",
    duration: "12 Monate",
    required: false,
  },
  {
    name: "Marketing-Cookies",
    purpose: "Personalisierte Werbung auf Drittplattformen",
    duration: "6 Monate",
    required: false,
  },
];

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 py-14">
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight">
        Cookie-Richtlinie
      </h1>
      <p className="mb-10 text-sm text-gray-500">Stand: Juni 2026</p>

      <div className="space-y-10 text-sm leading-relaxed text-gray-600">
        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            Was sind Cookies?
          </h2>
          <p>
            Cookies sind kleine Textdateien, die beim Besuch unserer Website auf
            deinem Gerät gespeichert werden. Sie ermöglichen es uns, die Website
            funktionsfähig zu halten, dein Einkaufserlebnis zu verbessern und
            die Nutzung unseres Angebots zu analysieren.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            Verwendete Cookies
          </h2>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-black">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-black">
                    Zweck
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-black">
                    Dauer
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-black">
                    Pflicht
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {cookieTypes.map((c) => (
                  <tr key={c.name}>
                    <td className="px-4 py-3 font-medium text-black">
                      {c.name}
                    </td>
                    <td className="px-4 py-3">{c.purpose}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {c.duration}
                    </td>
                    <td className="px-4 py-3">{c.required ? "Ja" : "Nein"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            Cookies verwalten
          </h2>
          <p>
            Du kannst Cookies in den Einstellungen deines Browsers jederzeit
            löschen oder blockieren. Bitte beachte, dass das Deaktivieren
            bestimmter Cookies die Funktionalität des Shops einschränken kann.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">
            Weitere Informationen
          </h2>
          <p>
            Weitere Informationen zum Datenschutz findest du in unserer{" "}
            <a
              href="/privacy"
              className="underline underline-offset-2 hover:text-black transition"
            >
              Datenschutzerklärung
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
