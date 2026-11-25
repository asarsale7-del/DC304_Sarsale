import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 items-center px-6 py-20 sm:px-8 sm:py-28">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Computer Science Student
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Hello, my name is Armand Sarsale.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I am a 21-year-old Computer Science student at Mater Dei College.
          I enjoy learning how software works and building useful things with
          what I learn.
        </p>
        <Link
          href="/projects"
          className="mt-8 inline-flex rounded-full bg-emerald-400 px-5 py-3 font-semibold text-zinc-950 transition-colors hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
        >
          See my projects
        </Link>
      </section>
    </main>
  );
}