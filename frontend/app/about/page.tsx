export const metadata = {
  title: "Über uns – Super Shop",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 py-14">
      <h1 className="mb-2 text-3xl font-black uppercase tracking-tight">Über uns</h1>
      <p className="mb-14 text-sm text-gray-500">
        Wir sind Super Shop — Mode, die bewegt.
      </p>

      {/* Unternehmen */}
      <section id="unternehmen" className="mb-14 scroll-mt-24">
        <h2 className="mb-4 text-xl font-bold uppercase tracking-wide">Unternehmen</h2>
        <div className="space-y-4 text-sm leading-relaxed text-gray-600">
          <p>
            Super Shop wurde 2021 in Bern gegründet mit dem Ziel, hochwertige Mode direkt zu
            fairen Preisen zugänglich zu machen — ohne Kompromisse bei Qualität oder Stil.
          </p>
          <p>
            Was als kleines Online-Label begann, ist heute eine der wachstumsstärksten
            Modeplattformen der Schweiz. Unser Sortiment umfasst Damen-, Herren- und
            Kinderkollektionen, kuratiert von einem Team mit Leidenschaft für Design und
            Handwerk.
          </p>
          <p>
            Wir glauben daran, dass Mode mehr ist als Kleidung — sie ist Ausdruck von
            Persönlichkeit, Haltung und Lebensfreude. Diesen Gedanken tragen wir in allem, was
            wir tun.
          </p>
        </div>
      </section>

      <hr className="mb-14 border-gray-200" />

      {/* Nachhaltigkeit */}
      <section id="nachhaltigkeit" className="mb-14 scroll-mt-24">
        <h2 className="mb-4 text-xl font-bold uppercase tracking-wide">Nachhaltigkeit</h2>
        <div className="space-y-4 text-sm leading-relaxed text-gray-600">
          <p>
            Nachhaltigkeit ist für uns kein Marketingversprechen, sondern ein Kernanliegen.
            Bis 2027 wollen wir unsere gesamte Lieferkette auf zertifizierte, umweltfreundliche
            Materialien umstellen.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Verpackungen aus 100 % recyceltem Material seit 2023</li>
            <li>CO₂-neutraler Versand durch Kompensationsprogramme</li>
            <li>Partnerschaft mit GOTS-zertifizierten Produktionsstätten</li>
            <li>Second-Life-Programm: gebrauchte Super-Shop-Artikel zurückgeben, Gutschein erhalten</li>
          </ul>
          <p>
            Wir sind überzeugt: Wer Mode liebt, muss auch die Welt lieben, in der er sie trägt.
          </p>
        </div>
      </section>

      <hr className="mb-14 border-gray-200" />

      {/* Karriere */}
      <section id="karriere" className="mb-14 scroll-mt-24">
        <h2 className="mb-4 text-xl font-bold uppercase tracking-wide">Karriere</h2>
        <div className="space-y-4 text-sm leading-relaxed text-gray-600">
          <p>
            Unser Team in Bern wächst — und wir suchen Menschen, die mit uns die Zukunft des
            Schweizer Online-Handels gestalten möchten.
          </p>
          <p>
            Ob als Entwickler:in, Designer:in, Logistikprofi oder im Kundenservice: Bei Super
            Shop erwartet dich ein offenes Arbeitsumfeld, flache Hierarchien und echte
            Mitgestaltungsmöglichkeiten.
          </p>
          <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="font-semibold text-black">Aktuell keine offenen Stellen</p>
            <p className="mt-1 text-gray-500">
              Schick uns trotzdem eine Initiativbewerbung — wir freuen uns immer über
              motivierte Talente.{" "}
              <a
                href="/contact"
                className="underline underline-offset-2 hover:text-black transition"
              >
                Jetzt bewerben →
              </a>
            </p>
          </div>
        </div>
      </section>

      <hr className="mb-14 border-gray-200" />

      {/* Presse */}
      <section id="presse" className="scroll-mt-24">
        <h2 className="mb-4 text-xl font-bold uppercase tracking-wide">Presse</h2>
        <div className="space-y-4 text-sm leading-relaxed text-gray-600">
          <p>
            Für Medienanfragen, Kooperationen und Bildmaterial steht unser Presseteam gerne
            zur Verfügung.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-4">
              <p className="font-semibold text-black">Pressekontakt</p>
              <p className="mt-1 text-gray-500">
                <a
                  href="mailto:presse@supershop.ch"
                  className="underline underline-offset-2 hover:text-black transition"
                >
                  presse@supershop.ch
                </a>
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <p className="font-semibold text-black">Pressemitteilungen</p>
              <p className="mt-1 text-gray-500">
                Auf Anfrage per E-Mail erhältlich.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
