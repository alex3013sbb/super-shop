import Link from "next/link";

const collections = [
  {
    title: "MEN",
    description: "Entdecke die neuesten Styles der Saison.",
    image: "/images/collection-1-a.jpg",
  },
  {
    title: "WOMEN",
    description: "Leichte Stoffe, frische Farben, neue Vibes.",
    image: "/images/collection-2-a.jpg",
  },
];

export default function CollectionsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-8 py-12">
        <h1 className="mb-8 text-5xl font-black uppercase text-center tracking-tight">
          Kollektionen
        </h1>

        <div className="flex flex-row justify-around gap-8 md:grid-cols-3">
          {collections.map((collection) => (
            <article key={collection.title}>
              <div className="w-[30vw] overflow-hidden bg-gray-100">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="mt-6 text-3xl font-black uppercase">
                {collection.title}
              </h2>

              <p className="mt-2 text-lg text-gray-600">
                {collection.description}
              </p>

              <Link
                href="/men"
                className="mt-5 inline-block bg-gray-200 px-8 py-3 text-md font-bold hover:bg-gray-300"
              >
                Jetzt Entdecken →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}