import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Hello, my name is Armand Sarsale</h1>
      <p className="mt-2">
        I am learning to build websites with Next.js. This is my first Next.js
        app, and I am excited to keep building.
      </p>
      <Link href="/projects" className="mt-4 inline-block underline">
        See my projects
      </Link>
    </main>
  );
}